package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.ContratoFiltroRequest;
import br.gov.ac.tce.licon.entities.Contrato;
import br.gov.ac.tce.licon.services.ContratoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Contrato")
@RestController
@RequestMapping("/contratos")
public class ContratoController extends AbstractController<Contrato, ContratoFiltroRequest, ContratoService> {

	@Autowired
	private ContratoService service;
	
	@Override
	protected ContratoService getService() {
		return service;
	}

}
