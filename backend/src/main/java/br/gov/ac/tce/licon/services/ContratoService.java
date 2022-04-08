package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.ContratoFiltroRequest;
import br.gov.ac.tce.licon.entities.Contrato;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ContratoService extends IService<Contrato, ContratoFiltroRequest> {

}
