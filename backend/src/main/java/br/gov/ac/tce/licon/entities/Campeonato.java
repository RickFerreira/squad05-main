package br.gov.ac.tce.licon.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Campeonato extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "NOME")
	private String nome;

	@NotNull
	@Column(name = "DESCRICAO")
	private String descricao;

	@NotNull
	@Column(name = "REGRAS")
	private String regras;

	@NotNull
	@Column(name = "CONFEDERACAO_ORGANIZADORA")
	private String confederacaoOrganizadora;

	@NotNull
	@Column(name = "ANO")
	private String ano;

	@NotNull
	@Column(name = "DATA_INICIO")
	private LocalDate dataInicio;
	
	@NotNull
	@Column(name = "DATA_FIM")
	private LocalDate dataFim;

}
