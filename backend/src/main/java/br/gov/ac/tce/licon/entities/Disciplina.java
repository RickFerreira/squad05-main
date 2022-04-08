package br.gov.ac.tce.licon.entities;

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
public class Disciplina extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "NOME")
	private String nome;
	
	@NotNull
	@Column(name = "EMENTA")
	private String ementa;
	
	@NotNull
	@Column(name = "CONTEUDO_PROGRAMATICO")
	private String conteudoProgramatico;

	@NotNull
	@Column(name = "BIBLIOGRAFIA_BASICA")
	private String bibliografiaBasica;

	@NotNull
	@Column(name = "BIBLIOGRAFIA_COMPLEMENTAR")
	private String bibliografiaComplementar;


}
