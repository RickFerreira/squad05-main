package br.gov.ac.tce.licon.services.specs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.gov.ac.tce.licon.dtos.requests.ComissaoFiltroRequest;
import br.gov.ac.tce.licon.dtos.requests.TimeFiltroRequest;
import br.gov.ac.tce.licon.entities.Time;
import br.gov.ac.tce.licon.entities.Time_;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TimeSpecification implements ISpecification<Time> {


	private static final long serialVersionUID = 3530797464370941947L;
	
	private final TimeFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Time> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Time_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getSigla())) {
			predicados.add(builder.equal(root.get(Time_.sigla), filtro.getSigla()));
		}
		
		if (!isNull(filtro.getCidade())) {
			predicados.add(builder.equal(root.get(Time_.cidade), filtro.getCidade()));
		}

		if (!isNull(filtro.getEstado())) {
			predicados.add(builder.equal(root.get(Time_.estado), filtro.getEstado()));
		}

		if (!isNull(filtro.getPais())) {
			predicados.add(builder.equal(root.get(Time_.pais), filtro.getPais()));
		}
		
		if (!isNull(filtro.getDataCriacaoInicial())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Time_.dataCriacao), filtro.getDataCriacaoInicial()));
		}
		
		if (!isNull(filtro.getDataCriacaoFinal())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Time_.dataCriacao), filtro.getDataCriacaoFinal()));
		}

		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
