package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.ContratoFiltroRequest;
import br.gov.ac.tce.licon.entities.Contrato;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.ContratoRepository;
import br.gov.ac.tce.licon.services.ContratoService;
import br.gov.ac.tce.licon.services.specs.ContratoSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ContratoServiceImpl extends AbstractService<Contrato, ContratoFiltroRequest, ContratoRepository> implements ContratoService {

	@Autowired
	private ContratoRepository repository;
	
	@Override
	public ContratoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Contrato> obterExemploChecarSeJahExiste(Contrato entity) throws AppException {
		Contrato exemplo = Contrato.builder()
								.titulo(entity.getTitulo())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Contrato entity) throws AppException {
		throw new AppException(String.format("Contrato com dado título já existe: %s", entity.getTitulo()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Contrato> getSpecification(ContratoFiltroRequest filtro) {
		return new ContratoSpecification(filtro);
	}

}
