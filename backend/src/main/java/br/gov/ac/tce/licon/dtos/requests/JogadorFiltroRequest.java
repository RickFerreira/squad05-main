package br.gov.ac.tce.licon.dtos.requests;

import br.gov.ac.tce.licon.entities.PeChute;
import br.gov.ac.tce.licon.entities.Posicao;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class JogadorFiltroRequest extends AbstractFiltroRequest {

	private String nome;
	private String nacionalidade;
	private Posicao posicao;
	private PeChute peChute;
	private LocalDate dataNascimentoInicio;
	private LocalDate dataNascimentoFim;
	private Double altura;
	private Double massa;

}
