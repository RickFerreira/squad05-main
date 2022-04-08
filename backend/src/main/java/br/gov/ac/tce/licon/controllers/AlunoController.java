package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.AlunoFiltroRequest;
import br.gov.ac.tce.licon.entities.Aluno;
import br.gov.ac.tce.licon.services.AlunoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Aluno")
@RestController
@RequestMapping("/alunos")
public class AlunoController extends AbstractController<Aluno, AlunoFiltroRequest, AlunoService> {

	@Autowired
	private AlunoService service;
	
	@Override
	protected AlunoService getService() {
		return service;
	}

}
