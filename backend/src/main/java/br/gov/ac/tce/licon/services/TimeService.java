package br.gov.ac.tce.licon.services;

import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.TimeFiltroRequest;
import br.gov.ac.tce.licon.entities.Time;

@Transactional
public interface TimeService extends IService<Time, TimeFiltroRequest> {

}
