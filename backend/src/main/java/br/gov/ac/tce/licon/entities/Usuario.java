package br.gov.ac.tce.licon.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Usuario extends AbstractAuditableEntity {


	@NotNull
	@Column(name = "NOME")
	private String nome;

	@NotNull
	@Column(name = "EMAIL")
	private String email;

	@NotNull
	@Column(name = "NOME_CANAL")
	private String nomeCanal;

	@NotNull
	@Column(name = "DATA_NASCIMENTO")
	private LocalDate dataNascimento;

}
