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
public class Contrato extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "TITULO")
	private String titulo;

	@NotNull
	@Column(name = "DESCRICAO")
	private String descricao;

	@NotNull
	@Column(name = "PERMITE_ADITIVO")
	private Boolean permiteAditivo;

	@NotNull
	@Column(name = "DATA_VENCIMENTO")
	private LocalDate dataVencimento;

}
