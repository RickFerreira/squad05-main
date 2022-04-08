package br.gov.ac.tce.licon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.entities.Comissao;
import br.gov.ac.tce.licon.services.ComissaoService;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Comissao")
@RestController
@RequestMapping("/comissoes")
public class ComissaoController extends AbstractController<Comissao, ComissaoFiltroRequest, ComissaoService> {

	@Autowired
	private ComissaoService service;
	
	@Override
	protected ComissaoService getService() {
		return service;
	}

}
