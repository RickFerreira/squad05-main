package br.gov.ac.tce.licon.services.specs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.gov.ac.tce.licon.dtos.requests.DisciplinaFiltroRequest;
import br.gov.ac.tce.licon.entities.Disciplina;
import br.gov.ac.tce.licon.entities.Disciplina_;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DisciplinaSpecification implements ISpecification<Disciplina> {

	
	private static final long serialVersionUID = 2547152528882091172L;
	
	private final DisciplinaFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Disciplina> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Disciplina_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getEmenta())) {
			predicados.add(builder.equal(root.get(Disciplina_.ementa), filtro.getEmenta()));
		}
		
		if (!isNull(filtro.getConteudoProgramatico())) {
			predicados.add(builder.equal(root.get(Disciplina_.conteudoProgramatico), filtro.getConteudoProgramatico()));
		}

		if (!isNull(filtro.getBibliografiaBasica())) {
			predicados.add(builder.equal(root.get(Disciplina_.bibliografiaBasica), filtro.getBibliografiaBasica()));
		}

		if (!isNull(filtro.getBibliografiaComplementar())) {
			predicados.add(builder.equal(root.get(Disciplina_.bibliografiaComplementar), filtro.getBibliografiaComplementar()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}

}
