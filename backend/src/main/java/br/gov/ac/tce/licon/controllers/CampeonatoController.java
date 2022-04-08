package br.gov.ac.tce.licon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.ac.tce.licon.dtos.requests.CampeonatoFiltroRequest;
import br.gov.ac.tce.licon.entities.Campeonato;
import br.gov.ac.tce.licon.services.CampeonatoService;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Campeonato")
@RestController
@RequestMapping("/campeonatos")
public class CampeonatoController extends AbstractController<Campeonato, CampeonatoFiltroRequest, CampeonatoService> {

	@Autowired
	private CampeonatoService service;
	
	@Override
	protected CampeonatoService getService() {
		return service;
	}

}
