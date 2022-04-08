package br.gov.ac.tce.licon.services;

import org.springframework.transaction.annotation.Transactional;

import br.gov.ac.tce.licon.dtos.requests.DisciplinaFiltroRequest;
import br.gov.ac.tce.licon.entities.Disciplina;

@Transactional
public interface DisciplinaService extends IService<Disciplina, DisciplinaFiltroRequest> {

}
