package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.JogadorFiltroRequest;
import br.gov.ac.tce.licon.entities.Jogador;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.JogadorRepository;
import br.gov.ac.tce.licon.services.JogadorService;
import br.gov.ac.tce.licon.services.specs.JogadorSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class JogadorServiceImpl extends AbstractService<Jogador, JogadorFiltroRequest, JogadorRepository> implements JogadorService {

	@Autowired
	private JogadorRepository repository;
	
	@Override
	public JogadorRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Jogador> obterExemploChecarSeJahExiste(Jogador entity) throws AppException {
		Jogador exemplo = Jogador.builder()
								.nome(entity.getNome())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Jogador entity) throws AppException {
		throw new AppException(String.format("Jogador com dado nome já existe: %s", entity.getNome()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Jogador> getSpecification(JogadorFiltroRequest filtro) {
		return new JogadorSpecification(filtro);
	}

}
