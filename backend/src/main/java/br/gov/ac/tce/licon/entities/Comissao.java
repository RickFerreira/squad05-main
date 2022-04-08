package br.gov.ac.tce.licon.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Comissao extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "TIPO")
	@Enumerated(EnumType.STRING)
	private TipoComissao tipo;

	@NotNull
	@Column(name = "NUMERO")
	private String numero;
	
	@NotNull
	@Column(name = "DATA_VIGENCIA_INICIAL")
	private LocalDate dataVigenciaInicial;
	
	@NotNull
	@Column(name = "DATA_VIGENCIA_FINAL")
	private LocalDate dataVigenciaFinal;

}
