package br.gov.ac.tce.licon.services.specs;

import br.gov.ac.tce.licon.dtos.requests.ContratoFiltroRequest;
import br.gov.ac.tce.licon.entities.Contrato;
import br.gov.ac.tce.licon.entities.Contrato_;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class ContratoSpecification implements ISpecification<Contrato> {

	private static final long serialVersionUID = -3088764477595092500L;
	
	private final ContratoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Contrato> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getTitulo())) {
			predicados.add(builder.equal(root.get(Contrato_.titulo), filtro.getTitulo()));
		}

		if (!isNull(filtro.getDescricao())) {
			predicados.add(builder.equal(root.get(Contrato_.descricao), filtro.getDescricao()));
		}

		if (!isNull(filtro.getPermiteAditivo())) {
			predicados.add(builder.equal(root.get(Contrato_.permiteAditivo), filtro.getPermiteAditivo()));
		}
		
		if (!isNull(filtro.getDataVencimentoInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Contrato_.dataVencimento), filtro.getDataVencimentoInicio()));
		}

		if (!isNull(filtro.getDataVencimentoFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Contrato_.dataVencimento), filtro.getDataVencimentoFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
