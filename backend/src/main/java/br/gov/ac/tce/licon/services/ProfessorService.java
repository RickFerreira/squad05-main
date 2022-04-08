package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.ProfessorFiltroRequest;
import br.gov.ac.tce.licon.entities.Professor;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ProfessorService extends IService<Professor, ProfessorFiltroRequest> {

}
