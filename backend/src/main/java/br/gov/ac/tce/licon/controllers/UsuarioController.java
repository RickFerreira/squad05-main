package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.UsuarioFiltroRequest;
import br.gov.ac.tce.licon.entities.Usuario;
import br.gov.ac.tce.licon.services.UsuarioService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Usuario")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController extends AbstractController<Usuario, UsuarioFiltroRequest, UsuarioService> {

	@Autowired
	private UsuarioService service;
	
	@Override
	protected UsuarioService getService() {
		return service;
	}

}
