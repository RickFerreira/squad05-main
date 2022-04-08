package br.gov.ac.tce.licon.entities;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum TipoComissao {
	
	PERMANENTE("Permanente", "CPL", "Comissão Permanente de Licitação"),
	ESPECIAL("Especial", "CEL", "Comissão Especial de Licitação");
	
	private String valor;
	private String codigo;
	private String descricao;
	
	private TipoComissao(String valor, String codigo, String descricao) {
		this.valor = valor;
		this.codigo = codigo;
		this.descricao = descricao;
	}

}
