package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class VideoFiltroRequest extends AbstractFiltroRequest {

	private String titulo;

	private String descricao;

	private Boolean infantil;

	private Integer duracaoInicial;
	private Integer duracaoFinal;

	private Integer tamanhoArquivoInicial;
	private Integer tamanhoArquivoFinal;

	private LocalDate dataPublicacaoInicial;
	private LocalDate dataPublicacaoFinal;
	
}
