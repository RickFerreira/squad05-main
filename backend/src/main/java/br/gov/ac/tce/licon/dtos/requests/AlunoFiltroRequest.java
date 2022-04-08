package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class AlunoFiltroRequest extends AbstractFiltroRequest {

	private String telefone;
	private String cpf;
	private String email;
	private String nome;
	private LocalDate dataNascimentoInicio;
	private LocalDate dataNascimentoFim;

}
