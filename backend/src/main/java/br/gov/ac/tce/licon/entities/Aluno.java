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
public class Aluno extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "TELEFONE")
	private String telefone;

	@NotNull
	@Column(name = "CPF")
	private String cpf;
	
	@NotNull
	@Column(name = "EMAIL")
	private String email;
	
	@NotNull
	@Column(name = "NOME")
	private String nome;

	@NotNull
	@Column(name = "DATA_NASCIMENTO")
	private LocalDate dataNascimento;

}
