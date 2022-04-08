package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.JogadorFiltroRequest;
import br.gov.ac.tce.licon.entities.Jogador;
import br.gov.ac.tce.licon.services.JogadorService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Jogador")
@RestController
@RequestMapping("/jogadores")
public class JogadorController extends AbstractController<Jogador, JogadorFiltroRequest, JogadorService> {

	@Autowired
	private JogadorService service;
	
	@Override
	protected JogadorService getService() {
		return service;
	}

}
