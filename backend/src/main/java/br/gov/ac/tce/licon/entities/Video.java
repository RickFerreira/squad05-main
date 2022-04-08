package br.gov.ac.tce.licon.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Video extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "TITULO")
	private String titulo;

	@NotNull
	@Column(name = "DESCRICAO")
	private String descricao;

	@NotNull
	@Column(name = "DURACAO")
	private Integer duracao;

	@NotNull
	@Column(name = "TAMANHO_ARQUIVO")
	private Integer tamanhoArquivo;

	@NotNull
	@Column(name = "INFANTIL")
	private Boolean infantil;

	@NotNull
	@Column(name = "DATA_PUBLICACAO")
	private LocalDate dataPublicacao;

}
