package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.TecnicoFiltroRequest;
import br.gov.ac.tce.licon.entities.Tecnico;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.TecnicoRepository;
import br.gov.ac.tce.licon.services.TecnicoService;
import br.gov.ac.tce.licon.services.specs.TecnicoSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TecnicoServiceImpl extends AbstractService<Tecnico, TecnicoFiltroRequest, TecnicoRepository> implements TecnicoService {

	@Autowired
	private TecnicoRepository repository;
	
	@Override
	public TecnicoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Tecnico> obterExemploChecarSeJahExiste(Tecnico entity) throws AppException {
		Tecnico exemplo = Tecnico.builder()
								.nome(entity.getNome())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Tecnico entity) throws AppException {
		throw new AppException(String.format("Ja existe um tecnico com este nome: %s", entity.getNome()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Tecnico> getSpecification(TecnicoFiltroRequest filtro) {
		return new TecnicoSpecification(filtro);
	}

}
