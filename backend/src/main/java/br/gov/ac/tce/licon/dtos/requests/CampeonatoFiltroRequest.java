package br.gov.ac.tce.licon.dtos.requests;

import java.time.LocalDate;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode(callSuper=false)
public class CampeonatoFiltroRequest extends AbstractFiltroRequest {

	private String nome;

	private String descricao;

	private String regras;

	private String confederacaoOrganizadora;

	private String ano;

	private LocalDate dataInicioInicio;

	private LocalDate dataInicioFim;

	private LocalDate dataFimInicio;

	private LocalDate dataFimFim;
}
