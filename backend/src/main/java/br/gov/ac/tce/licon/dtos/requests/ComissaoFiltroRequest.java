package br.gov.ac.tce.licon.dtos.requests;

import java.time.LocalDate;

import br.gov.ac.tce.licon.entities.TipoComissao;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ComissaoFiltroRequest extends AbstractFiltroRequest {

	private TipoComissao tipo;

	private String numero;

	private LocalDate dataVigenciaInicialInicio;

	private LocalDate dataVigenciaInicialFim;

	private LocalDate dataVigenciaFinalInicio;

	private LocalDate dataVigenciaFinalFim;

}
