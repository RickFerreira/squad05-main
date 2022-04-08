package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.TecnicoFiltroRequest;
import br.gov.ac.tce.licon.entities.Tecnico;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface TecnicoService extends IService<Tecnico, TecnicoFiltroRequest> {

}
