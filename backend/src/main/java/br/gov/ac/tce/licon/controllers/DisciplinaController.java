package br.gov.ac.tce.licon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.ac.tce.licon.dtos.requests.DisciplinaFiltroRequest;
import br.gov.ac.tce.licon.entities.Disciplina;
import br.gov.ac.tce.licon.services.DisciplinaService;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Disciplina")
@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController extends AbstractController<Disciplina, DisciplinaFiltroRequest, DisciplinaService> {

	@Autowired
	private DisciplinaService service;
	
	@Override
	protected DisciplinaService getService() {
		return service;
	}

}