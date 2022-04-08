package br.gov.ac.tce.licon.dtos.requests;

import java.time.LocalDate;

import br.gov.ac.tce.licon.entities.TipoComissao;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode(callSuper=false)
public class TimeFiltroRequest extends AbstractFiltroRequest {

	private String nome;
	
	private String sigla;
	
	private String estado;
	
	private String cidade;
	
	private String pais;
	
	private LocalDate dataCriacaoInicial;
	private LocalDate dataCriacaoFinal;
	
}
