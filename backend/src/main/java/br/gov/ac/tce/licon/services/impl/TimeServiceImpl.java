package br.gov.ac.tce.licon.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.dtos.requests.TimeFiltroRequest;
import br.gov.ac.tce.licon.entities.Comissao;
import br.gov.ac.tce.licon.entities.Time;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.ComissaoRepository;
import br.gov.ac.tce.licon.repositories.TimeRepository;
import br.gov.ac.tce.licon.services.ComissaoService;
import br.gov.ac.tce.licon.services.TimeService;
import br.gov.ac.tce.licon.services.specs.ComissaoSpecification;
import br.gov.ac.tce.licon.services.specs.TimeSpecification;

@Service
@Transactional
public class TimeServiceImpl extends AbstractService<Time, TimeFiltroRequest, TimeRepository> implements TimeService {

	@Autowired
	private TimeRepository repository;

	@Override
	public TimeRepository getRepository() {
		return repository;
	}

	@Override
	protected Example<Time> obterExemploChecarSeJahExiste(Time entity) throws AppException {
		Time exemplo = Time.builder().nome(entity.getNome()).build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Time entity) throws AppException {
		throw new AppException(String.format("Time com dado nome já existe: %s", entity.getNome()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Time> getSpecification(TimeFiltroRequest filtro) {
		return new TimeSpecification(filtro);
	}

}
