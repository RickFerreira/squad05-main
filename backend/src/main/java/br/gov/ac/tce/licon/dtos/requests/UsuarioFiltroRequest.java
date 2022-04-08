package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class UsuarioFiltroRequest extends AbstractFiltroRequest {

	private String nome;

	private String email;

	private String nomeCanal;

	private LocalDate dataNascimentoInicio;

	private LocalDate dataNascimentoFim;

}
