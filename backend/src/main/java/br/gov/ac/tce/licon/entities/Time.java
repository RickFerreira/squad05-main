package br.gov.ac.tce.licon.entities;


import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
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
public class Time extends AbstractAuditableEntity {

	@NotNull
	@Column(name = "NOME")
	private String nome;
	
	@NotNull
	@Column(name = "SIGLA")
	private String sigla;
	
	@NotNull
	@Column(name = "DATA_CRIACAO")
	private LocalDate dataCriacao;
	
	@NotNull
	@Column(name = "ESTADO")
	private String estado;
	
	@NotNull
	@Column(name = "CIDADE")
	private String cidade;
	
	@NotNull
	@Column(name = "PAIS")
	private String pais;
	
}
