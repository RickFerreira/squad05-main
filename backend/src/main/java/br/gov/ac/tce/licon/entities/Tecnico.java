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
public class Tecnico extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "NOME")
	private String nome;

	@NotNull
	@Column(name = "NUM_TITULOS")
	private Integer numTitulos;

	@NotNull
	@Column(name = "DATA_NASCIMENTO")
	private LocalDate dataNascimento;

	@NotNull
	@Column(name = "ESTILO_JOGO")
	private String estiloJogo;

}
