package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.ProfessorFiltroRequest;
import br.gov.ac.tce.licon.entities.Professor;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.ProfessorRepository;
import br.gov.ac.tce.licon.services.ProfessorService;
import br.gov.ac.tce.licon.services.specs.ProfessorSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProfessorServiceImpl extends AbstractService<Professor, ProfessorFiltroRequest, ProfessorRepository> implements ProfessorService {

	@Autowired
	private ProfessorRepository repository;
	
	@Override
	public ProfessorRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Professor> obterExemploChecarSeJahExiste(Professor entity) throws AppException {
		Professor exemplo = Professor.builder()
								.email(entity.getEmail())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Professor entity) throws AppException {
		throw new AppException(String.format("Professor com dado email já existe: %s", entity.getEmail()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Professor> getSpecification(ProfessorFiltroRequest filtro) {
		return new ProfessorSpecification(filtro);
	}

}
