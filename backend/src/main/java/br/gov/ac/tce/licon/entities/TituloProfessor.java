package br.gov.ac.tce.licon.entities;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum TituloProfessor {

	DOUTOR("Doutor"),
	MESTRE("Mestre"),
	GRADUADO("Graduado"),
	ESPECIALISTA("Especialista");

	private String valor;


	private TituloProfessor(String valor) {
		this.valor = valor;

	}

}
