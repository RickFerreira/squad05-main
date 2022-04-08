package br.gov.ac.tce.licon.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.entities.Comissao;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.ComissaoRepository;
import br.gov.ac.tce.licon.services.ComissaoService;
import br.gov.ac.tce.licon.services.specs.ComissaoSpecification;

@Service
@Transactional
public class ComissaoServiceImpl extends AbstractService<Comissao, ComissaoFiltroRequest, ComissaoRepository> implements ComissaoService {

	@Autowired
	private ComissaoRepository repository;
	
	@Override
	public ComissaoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Comissao> obterExemploChecarSeJahExiste(Comissao entity) throws AppException {
		Comissao exemplo = Comissao.builder()
								.numero(entity.getNumero())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Comissao entity) throws AppException {
		throw new AppException(String.format("Comissão com dado número já existe: %s", entity.getNumero()), 
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Comissao> getSpecification(ComissaoFiltroRequest filtro) {
		return new ComissaoSpecification(filtro);
	}
	
	@Override
	protected void validar(Comissao entity) throws AppException {
		validarDataVigencia(entity);
	}

	private void validarDataVigencia(Comissao entity) throws AppException {
		if (entity.getDataVigenciaInicial() == null) {
			return;
		}
		if (entity.getDataVigenciaFinal() == null) {
			return;
		}
		if (entity.getDataVigenciaInicial().isAfter(entity.getDataVigenciaFinal())) {
			throw new AppException(String.format("Data de vigência inicial deve ser anterior a final. Inicial: %s. Final: %s", 
					entity.getDataVigenciaInicial(), 
					entity.getDataVigenciaFinal()), 
					HttpStatus.BAD_REQUEST);
		}
	}

}
