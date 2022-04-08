package br.gov.ac.tce.licon.dtos.requests;
import br.gov.ac.tce.licon.entities.TituloProfessor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper=false)
public class ProfessorFiltroRequest extends AbstractFiltroRequest {

	private Long cpf;
	private LocalDate dataNascimentoInicio;
	private LocalDate dataNascimentoFim;
	private String email;
	private String nome;
	private TituloProfessor titulo;
	private String area;

}
