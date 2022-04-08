package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class TecnicoFiltroRequest extends AbstractFiltroRequest {

	private String nome;
	private Integer numTitulos;
	private LocalDate dataNascimento;
	private String estiloJogo;

}
