package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.UsuarioFiltroRequest;
import br.gov.ac.tce.licon.entities.Usuario;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface UsuarioService extends IService<Usuario, UsuarioFiltroRequest> {

}
