package br.gov.ac.tce.licon.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.CampeonatoFiltroRequest;
import br.gov.ac.tce.licon.entities.Campeonato;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.CampeonatoRepository;
import br.gov.ac.tce.licon.services.CampeonatoService;
import br.gov.ac.tce.licon.services.specs.CampeonatoSpecification;

@Service
@Transactional
public class CampeonatoServiceImpl extends AbstractService<Campeonato, CampeonatoFiltroRequest, CampeonatoRepository> implements CampeonatoService {

	@Autowired
	private CampeonatoRepository repository;
	
	@Override
	public CampeonatoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Campeonato> obterExemploChecarSeJahExiste(Campeonato entity) throws AppException {
		Campeonato exemplo = Campeonato.builder()
								.nome(entity.getNome())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Campeonato entity) throws AppException {
		throw new AppException(String.format("Campeonato com dado nome já existe: %s", entity.getNome()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Campeonato> getSpecification(CampeonatoFiltroRequest filtro) {
		return new CampeonatoSpecification(filtro);
	}

}
