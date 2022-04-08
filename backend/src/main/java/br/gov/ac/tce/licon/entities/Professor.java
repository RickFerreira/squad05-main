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
public class Professor extends AbstractAuditableEntity {
	
	@NotNull
	@Column(name="CPF")
	private Long cpf;

	@NotNull
	@Column(name="DATA_NASCIMENTO")
	private LocalDate dataNascimento;

	@NotNull
	@Column(name="EMAIL")
	private String email;

	@NotNull
	@Column(name="NOME")
	private String nome;

	@NotNull
	@Column(name="TITULO")
	@Enumerated(EnumType.STRING)
	private TituloProfessor titulo;

	@NotNull
	@Column(name="AREA")
	private String area;
}
