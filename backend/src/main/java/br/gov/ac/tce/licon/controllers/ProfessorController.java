package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.ProfessorFiltroRequest;
import br.gov.ac.tce.licon.entities.Professor;
import br.gov.ac.tce.licon.services.ProfessorService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Professor")
@RestController
@RequestMapping("/professores")
public class ProfessorController extends AbstractController<Professor, ProfessorFiltroRequest, ProfessorService> {

	@Autowired
	private ProfessorService service;
	
	@Override
	protected ProfessorService getService() {
		return service;
	}

}
