package br.gov.ac.tce.licon.services.impl;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.apache.commons.lang3.reflect.FieldUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;

import br.gov.ac.tce.licon.configuration.PaginationConfig;
import br.gov.ac.tce.licon.dtos.requests.AbstractFiltroRequest;
import br.gov.ac.tce.licon.dtos.responses.BuscaResponse;
import br.gov.ac.tce.licon.entities.AbstractAuditableEntity;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.IRepository;
import br.gov.ac.tce.licon.services.IService;
import lombok.AccessLevel;
import lombok.Getter;

@Getter(value = AccessLevel.PROTECTED)
public abstract class AbstractService<E extends AbstractAuditableEntity, F extends AbstractFiltroRequest, R extends IRepository<E>> implements IService<E, F> {

	@Autowired
	private PaginationConfig paginationConfig;
	
	private final Class<E> persistentClass;
	
	@SuppressWarnings("unchecked")
	public AbstractService() {
		this.persistentClass = (Class<E>) ((ParameterizedType) getClass().getGenericSuperclass())
				.getActualTypeArguments()[0];
	}
	
	protected String getEntityName() {
		return persistentClass.getSimpleName();
	}
	
	public abstract R getRepository();

	public E getById(Long id) throws AppException {
		Optional<E> entidadeOpt = getRepository().findById(id);
		if (entidadeOpt.isPresent()) {
			E entity = entidadeOpt.get();
			return removerAtributosDeAuditoria(entity);
		} else {
			throw new AppException(String.format("Entidade '%s' com ID '%d' não encontrada.", getEntityName(), id), HttpStatus.NOT_FOUND);
		}
	}
	
	public void remover(Long id) throws AppException {
		Optional<E> entidadeOpt = getRepository().findById(id);
		if (entidadeOpt.isPresent()) {
			E entidade = entidadeOpt.get();
			validarRemover(entidade);
			getRepository().delete(entidade); // Remover a entidade em si e não pelo ID, de modo que o cascade do JPA entre em ação
		} else {
			throw new AppException(String.format("Entidade '%s' com ID '%d' não encontrada.", getEntityName(), id), HttpStatus.NOT_FOUND); 
		}
	}
	
	protected void validarRemover(E entidade) throws AppException {
		// Fazer nada
	}

	public E save(E entity) throws AppException {
		if (entity.getId() != null) {
			entity = patch(entity);
		} else {
		}
		resolverRelacionamentos(entity);
		checarSeJahExiste(entity);
		validar(entity);
		getRepository().save(entity);
		return removerAtributosDeAuditoria(entity);
	}
	
	protected void validar(E entity) throws AppException {
		// Fazer nada
	}

	protected void resolverRelacionamentos(E entity) throws AppException {
		// Fazer nada
	}
	
	protected void checarSeJahExiste(E entity) throws AppException {
		Example<E> exemplo = obterExemploChecarSeJahExiste(entity);
		if (exemplo != null) {
			boolean existe =  getRepository().exists(exemplo);
			if (existe) {
				Optional<E> optional = getRepository().findOne(exemplo);
				if (optional.isPresent()) {
					if (!optional.get().getId().equals(entity.getId())) {
						lancarErroEntidadeJahExistente(entity);
					}
				} else {
					lancarErroEntidadeJahExistente(entity);
				}
			}
		}
	}
	
	protected void lancarErroEntidadeJahExistente(E entity) throws AppException {
		throw new AppException(String.format("Entidade '%s' já existe.", getEntityName()), HttpStatus.UNPROCESSABLE_ENTITY);
	}
	
	protected Example<E> obterExemploChecarSeJahExiste(E entity) throws AppException {
		// Do nothing
		return null;
	}
	
	public BuscaResponse<E> buscar(F filtro) {
		Specification<E> spec = getSpecification(filtro);
		Page<E> page = getRepository().findAll(spec, paginationConfig.toPageRequest(filtro));
		BuscaResponse<E> response = new BuscaResponse<>();
        response.setTotal(page.getTotalElements());
        response.setItems(getItemsBuscar(page));
        return response;
	}
	
	protected E removerAtributosDeAuditoria(E entity) {
		entity.setCreatedAt(null);
		entity.setUpdatedAt(null);
		return entity;
	}
	
	protected List<E> getItemsBuscar(Page<E> page) {
		page.get().forEach(e -> {
			removerAtributosDeAuditoria(e);
		});
		return page.getContent();
	}

	protected abstract Specification<E> getSpecification(F filtro);
	
	private E patch(E patch) throws AppException {
		final Long id = patch.getId();
		Optional<E> entityOpt = getRepository().findById(id);
		if (!entityOpt.isPresent()) {
			throw new EntityNotFoundException(String.format("Entity '%s' com id '%d' não encontrado.", getEntityName(), id)); 
		}
		E entity = entityOpt.get();
		patch(entity, patch);
		return entity;
	}
	
	private void patch(E entity, E patch) throws AppException {
		List<Field> fields = getAllFields(patch.getClass());
		try {
			for (Field field : fields) {
				Object value = FieldUtils.readField(field, patch, true);
				FieldUtils.writeField(field, entity, value);
			}
		} catch (IllegalArgumentException | IllegalAccessException e) {
			throw new AppException("Some error occurred while extrating data to update entity.", e);
		}
	}
	
	private List<Field> getAllFields(Class<?> clazz) {
		List<Field> result = new ArrayList<>(Arrays.asList(FieldUtils.getAllFields(clazz)));
		return result;
	}

}
