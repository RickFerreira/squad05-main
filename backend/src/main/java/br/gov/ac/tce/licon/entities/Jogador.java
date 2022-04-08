package br.gov.ac.tce.licon.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Jogador extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "NOME")
	private String nome;

	@NotNull
	@Column(name = "NACIONALIDADE")
	private String nacionalidade;

	@NotNull
	@Column(name = "POSICAO")
	private Posicao posicao;

	@NotNull
	@Column(name = "PE_CHUTE")
	@Enumerated(EnumType.STRING)
	private PeChute peChute;

	@NotNull
	@Column(name = "DATA_NASCIMENTO")
	private LocalDate dataNascimento;

	@NotNull
	@Column(name = "ALTURA")
	private Double altura;

	@NotNull
	@Column(name = "MASSA")
	private Double massa;

}
