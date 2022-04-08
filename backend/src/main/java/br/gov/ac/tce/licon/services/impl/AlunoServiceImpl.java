package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.AlunoFiltroRequest;
import br.gov.ac.tce.licon.entities.Aluno;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.AlunoRepository;
import br.gov.ac.tce.licon.services.AlunoService;
import br.gov.ac.tce.licon.services.specs.AlunoSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AlunoServiceImpl extends AbstractService<Aluno, AlunoFiltroRequest, AlunoRepository> implements AlunoService {

	@Autowired
	private AlunoRepository repository;
	
	@Override
	public AlunoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Aluno> obterExemploChecarSeJahExiste(Aluno entity) throws AppException {
		Aluno exemplo = Aluno.builder()
								.cpf(entity.getCpf())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Aluno entity) throws AppException {
		throw new AppException(String.format("Aluno com dado cpf já existe: %s", entity.getCpf()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Aluno> getSpecification(AlunoFiltroRequest filtro) {
		return new AlunoSpecification(filtro);
	}

}
