package br.gov.ac.tce.licon.services.specs;
import br.gov.ac.tce.licon.dtos.requests.ProfessorFiltroRequest;
import br.gov.ac.tce.licon.entities.Professor;
import br.gov.ac.tce.licon.entities.Professor_;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class ProfessorSpecification implements ISpecification<Professor> {

	private static final long serialVersionUID = 1L;
	
	private final ProfessorFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Professor> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();

		if (!isNull(filtro.getCpf())) {
			predicados.add(builder.equal(root.get(Professor_.cpf), filtro.getCpf()));
		}
		
		if (!isNull(filtro.getEmail())) {
			predicados.add(builder.equal(root.get(Professor_.email), filtro.getEmail()));
		}

		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Professor_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getTitulo())) {
			predicados.add(builder.equal(root.get(Professor_.titulo), filtro.getTitulo()));
		}

		if (!isNull(filtro.getArea())) {
			predicados.add(builder.equal(root.get(Professor_.area), filtro.getArea()));
		}

		if (!isNull(filtro.getDataNascimentoInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Professor_.dataNascimento), filtro.getDataNascimentoInicio()));
		}

		if (!isNull(filtro.getDataNascimentoFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Professor_.dataNascimento), filtro.getDataNascimentoFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
