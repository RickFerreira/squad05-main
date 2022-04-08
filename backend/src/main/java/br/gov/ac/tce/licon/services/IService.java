package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.AbstractFiltroRequest;
import br.gov.ac.tce.licon.dtos.responses.BuscaResponse;
import br.gov.ac.tce.licon.entities.AbstractIdentificavel;
import br.gov.ac.tce.licon.exceptions.AppException;

public interface IService<E extends AbstractIdentificavel, F extends AbstractFiltroRequest> {

	public E getById(Long id) throws AppException;

	public E save(E entity) throws AppException;
	
	public BuscaResponse<E> buscar(F filtro) throws AppException;

	public void remover(Long id) throws AppException;
	
}
