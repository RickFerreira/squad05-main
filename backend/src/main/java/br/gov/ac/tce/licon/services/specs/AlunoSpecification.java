package br.gov.ac.tce.licon.services.specs;

import br.gov.ac.tce.licon.dtos.requests.AlunoFiltroRequest;
import br.gov.ac.tce.licon.entities.Aluno;
import br.gov.ac.tce.licon.entities.Aluno_;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class AlunoSpecification implements ISpecification<Aluno> {

	private static final long serialVersionUID = 1L;
	
	private final AlunoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Aluno> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getCpf())) {
			predicados.add(builder.equal(root.get(Aluno_.cpf), filtro.getCpf()));
		}

		if (!isNull(filtro.getEmail())) {
			predicados.add(builder.equal(root.get(Aluno_.email), filtro.getEmail()));
		}

		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Aluno_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getTelefone())) {
			predicados.add(builder.equal(root.get(Aluno_.telefone), filtro.getTelefone()));
		}
		
		if (!isNull(filtro.getDataNascimentoInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Aluno_.dataNascimento), filtro.getDataNascimentoInicio()));
		}

		if (!isNull(filtro.getDataNascimentoFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Aluno_.dataNascimento), filtro.getDataNascimentoFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
