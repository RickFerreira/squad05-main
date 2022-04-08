package br.gov.ac.tce.licon.entities;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum Posicao {

	GOLEIRO("Goleiro"),
	LATERAL("Lateral"),
	MEIO("Meio"),
	ZAGUEIRO("Zagueiro");

	private String valor;

	private Posicao(String valor) {
		this.valor = valor;
	}

}
