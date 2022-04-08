package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.JogadorFiltroRequest;
import br.gov.ac.tce.licon.entities.Jogador;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface JogadorService extends IService<Jogador, JogadorFiltroRequest> {

}
