package br.gov.ac.tce.licon.services;

import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.CampeonatoFiltroRequest;
import br.gov.ac.tce.licon.entities.Campeonato;

@Transactional
public interface CampeonatoService extends IService<Campeonato, CampeonatoFiltroRequest> {

}