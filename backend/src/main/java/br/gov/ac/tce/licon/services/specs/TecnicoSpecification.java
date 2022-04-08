package br.gov.ac.tce.licon.services.specs;


import br.gov.ac.tce.licon.dtos.requests.TecnicoFiltroRequest;
import br.gov.ac.tce.licon.entities.Tecnico_;
import br.gov.ac.tce.licon.entities.Tecnico;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class TecnicoSpecification implements ISpecification<Tecnico> {

	private static final long serialVersionUID = 1L;
	
	private final TecnicoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Tecnico> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Tecnico_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getNumTitulos())) {
			predicados.add(builder.equal(root.get(Tecnico_.numTitulos), filtro.getNumTitulos()));
		}
		
		if (!isNull(filtro.getDataNascimento())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Tecnico_.dataNascimento), filtro.getDataNascimento()));
		}

		if (!isNull(filtro.getEstiloJogo())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Tecnico_.estiloJogo), filtro.getEstiloJogo()));
		}

		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
