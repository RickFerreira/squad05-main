package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.AlunoFiltroRequest;
import br.gov.ac.tce.licon.entities.Aluno;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface AlunoService extends IService<Aluno, AlunoFiltroRequest> {

}
