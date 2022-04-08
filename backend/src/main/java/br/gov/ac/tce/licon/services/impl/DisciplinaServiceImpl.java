package br.gov.ac.tce.licon.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.DisciplinaFiltroRequest;
import br.gov.ac.tce.licon.entities.Disciplina;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.DisciplinaRepository;
import br.gov.ac.tce.licon.services.DisciplinaService;
import br.gov.ac.tce.licon.services.specs.DisciplinaSpecification;

@Service
@Transactional
public class DisciplinaServiceImpl extends AbstractService<Disciplina, DisciplinaFiltroRequest, DisciplinaRepository> implements DisciplinaService {

	@Autowired
	private DisciplinaRepository repository;
	
	@Override
	public DisciplinaRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Disciplina> obterExemploChecarSeJahExiste(Disciplina entity) throws AppException {
		Disciplina exemplo = Disciplina.builder()
								.nome(entity.getNome())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Disciplina entity) throws AppException {
		throw new AppException(String.format("Disciplina com dado nome já existe: %s", entity.getNome()), 
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Disciplina> getSpecification(DisciplinaFiltroRequest filtro) {
		return new DisciplinaSpecification(filtro);
	}

}
