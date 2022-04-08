package br.gov.ac.tce.licon.controllers;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.gov.ac.tce.licon.dtos.requests.AbstractFiltroRequest;
import br.gov.ac.tce.licon.dtos.responses.BuscaResponse;
import br.gov.ac.tce.licon.dtos.responses.FailureResponse;
import br.gov.ac.tce.licon.entities.AbstractIdentificavel;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.services.IService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin(origins = "*")
@Validated
public abstract class AbstractController<E extends AbstractIdentificavel, //
 										 F extends AbstractFiltroRequest, //
										 S extends IService<E, F>> { //
	
	protected abstract S getService();
	
	@RequestMapping(method = RequestMethod.POST)
	@Operation(description = "Cria uma nova entidade")
	@ApiResponses(value = {  //
			  @ApiResponse(responseCode = "200", description = "Response"), //
			  @ApiResponse(responseCode = "400", description = "Bad request", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), // 
			  @ApiResponse(responseCode = "404", description = "Not found", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
			  @ApiResponse(responseCode = "default", description = "Unexpected error", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
	})
	public ResponseEntity<E> criar(@Valid @RequestBody E entity) throws AppException {
		entity.setId(null); // Medida de segurança para garantir que estamos tentando criar uma nova entidade
		E e = getService().save(entity);
		return ResponseEntity.ok(e);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@Operation(description = "Obtem uma entidade a partir de seu ID")
	@ApiResponses(value = {  //
			@ApiResponse(responseCode = "200", description = "Response"), //
			@ApiResponse(responseCode = "400", description = "Bad request", //
					content = @Content(mediaType = "application/json", //
							schema = @Schema(implementation = FailureResponse.class))), //
			@ApiResponse(responseCode = "404", description = "Not found", //
					content = @Content(mediaType = "application/json", //
							schema = @Schema(implementation = FailureResponse.class))), //
			@ApiResponse(responseCode = "default", description = "Unexpected error", //
					content = @Content(mediaType = "application/json", //
							schema = @Schema(implementation = FailureResponse.class))), //
	})
	public ResponseEntity<E> getById(@PathVariable("id") Long id) throws AppException {
		E entity = getService().getById(id);
		return ResponseEntity.ok(entity);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@Operation(description = "Remover uma entidade")
	@ApiResponses(value = {  //
			  @ApiResponse(responseCode = "200", description = "Response"), //
			  @ApiResponse(responseCode = "400", description = "Bad request", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), // 
			  @ApiResponse(responseCode = "404", description = "Not found", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
			  @ApiResponse(responseCode = "default", description = "Unexpected error", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
	})
	public ResponseEntity<E> remover(@PathVariable("id") Long id) throws AppException {
		getService().remover(id);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	@Operation(description = "Atualizar uma entidade")
	@ApiResponses(value = {  //
			  @ApiResponse(responseCode = "200", description = "Response"), //
			  @ApiResponse(responseCode = "400", description = "Bad request", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), // 
			  @ApiResponse(responseCode = "404", description = "Not found", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
			  @ApiResponse(responseCode = "default", description = "Unexpected error", //
			    content = @Content(mediaType = "application/json", //
			    				   schema = @Schema(implementation = FailureResponse.class))), //
	})
	public ResponseEntity<E> atualizar(@PathVariable("id") Long id, @Valid @RequestBody E entity) throws AppException {
		entity.setId(id);
		getService().save(entity);
		return ResponseEntity.ok(entity);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ApiResponses(value = { 
			  @ApiResponse(responseCode = "200", description = "Response"),
			  @ApiResponse(responseCode = "400", description = "Bad request", 
			    content = @Content(mediaType = "application/json", 
			    					schema = @Schema(implementation = FailureResponse.class))), 
			  @ApiResponse(responseCode = "404", description = "Not found", 
			    content = @Content(mediaType = "application/json", 
			    					schema = @Schema(implementation = FailureResponse.class))),
			  @ApiResponse(responseCode = "default", description = "Unexpected error", 
			    content = @Content(mediaType = "application/json", 
			    					schema = @Schema(implementation = FailureResponse.class))),
	})
	public ResponseEntity<BuscaResponse<E>> buscar(@Valid F filtro) throws AppException {
		BuscaResponse<E> result = getService().buscar(filtro);
		return ResponseEntity.ok(result);
	}
	

}
