package br.gov.ac.tce.licon.services;

import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.entities.Comissao;

@Transactional
public interface ComissaoService extends IService<Comissao, ComissaoFiltroRequest> {

}
