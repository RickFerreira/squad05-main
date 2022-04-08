package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class ContratoFiltroRequest extends AbstractFiltroRequest {

	private String titulo;
	private String descricao;
	private Boolean permiteAditivo;
	private LocalDate dataVencimentoInicio;
	private LocalDate dataVencimentoFim;
	
}
