package br.gov.ac.tce.licon.entities;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum PeChute {

	AMBIDESTRO("Ambidestro"),
	CANHOTO("Canhoto"),
	DESTRO("Destro");

	private String valor;

	private PeChute(String valor) {
		this.valor = valor;
	}

}
