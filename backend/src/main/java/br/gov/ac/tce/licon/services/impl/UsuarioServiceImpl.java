package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.UsuarioFiltroRequest;
import br.gov.ac.tce.licon.entities.Usuario;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.UsuarioRepository;
import br.gov.ac.tce.licon.services.UsuarioService;
import br.gov.ac.tce.licon.services.specs.UsuarioSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UsuarioServiceImpl extends AbstractService<Usuario, UsuarioFiltroRequest, UsuarioRepository> implements UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	@Override
	public UsuarioRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Usuario> obterExemploChecarSeJahExiste(Usuario entity) throws AppException {
		Usuario exemplo = Usuario.builder()
								.email(entity.getEmail())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Usuario entity) throws AppException {
		throw new AppException(String.format("Usuário com esse email já existe: %s", entity.getEmail()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Usuario> getSpecification(UsuarioFiltroRequest filtro) {
		return new UsuarioSpecification(filtro);
	}
}
