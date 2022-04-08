package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.TecnicoFiltroRequest;
import br.gov.ac.tce.licon.entities.Tecnico;
import br.gov.ac.tce.licon.services.TecnicoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Tecnico")
@RestController
@RequestMapping("/tecnicos")
public class TecnicoController extends AbstractController<Tecnico, TecnicoFiltroRequest, TecnicoService> {

	@Autowired
	private TecnicoService service;
	
	@Override
	protected TecnicoService getService() {
		return service;
	}

}
