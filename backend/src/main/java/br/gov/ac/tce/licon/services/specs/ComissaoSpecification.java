package br.gov.ac.tce.licon.services.specs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.entities.Comissao;
import br.gov.ac.tce.licon.entities.Comissao_;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ComissaoSpecification implements ISpecification<Comissao> {

	private static final long serialVersionUID = 1L;
	
	private final ComissaoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Comissao> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getTipo())) {
			predicados.add(builder.equal(root.get(Comissao_.tipo), filtro.getTipo()));
		}

		if (!isNull(filtro.getNumero())) {
			predicados.add(builder.equal(root.get(Comissao_.numero), filtro.getNumero()));
		}
		
		if (!isNull(filtro.getDataVigenciaInicialInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Comissao_.dataVigenciaInicial), filtro.getDataVigenciaInicialInicio()));
		}

		if (!isNull(filtro.getDataVigenciaInicialFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Comissao_.dataVigenciaInicial), filtro.getDataVigenciaInicialFim()));
		}
		
		if (!isNull(filtro.getDataVigenciaFinalInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Comissao_.dataVigenciaFinal), filtro.getDataVigenciaFinalInicio()));
		}

		if (!isNull(filtro.getDataVigenciaFinalFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Comissao_.dataVigenciaFinal), filtro.getDataVigenciaFinalFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
