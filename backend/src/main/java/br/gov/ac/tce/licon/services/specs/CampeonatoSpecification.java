package br.gov.ac.tce.licon.services.specs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.gov.ac.tce.licon.dtos.requests.CampeonatoFiltroRequest;
import br.gov.ac.tce.licon.entities.Campeonato;
import br.gov.ac.tce.licon.entities.Campeonato_;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CampeonatoSpecification implements ISpecification<Campeonato> {

	private static final long serialVersionUID = -3088764477595092500L;
	
	private final CampeonatoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Campeonato> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Campeonato_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getDescricao())) {
			predicados.add(builder.equal(root.get(Campeonato_.descricao), filtro.getDescricao()));
		}

		if (!isNull(filtro.getRegras())) {
			predicados.add(builder.equal(root.get(Campeonato_.regras), filtro.getRegras()));
		}

		if (!isNull(filtro.getConfederacaoOrganizadora())) {
			predicados.add(builder.equal(root.get(Campeonato_.confederacaoOrganizadora), filtro.getConfederacaoOrganizadora()));
		}

		if (!isNull(filtro.getAno())) {
			predicados.add(builder.equal(root.get(Campeonato_.ano), filtro.getAno()));
		}

		if (!isNull(filtro.getDataInicioInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Campeonato_.dataInicio), filtro.getDataInicioInicio()));
		}

		if (!isNull(filtro.getDataInicioFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Campeonato_.dataInicio), filtro.getDataInicioFim()));
		}

		if (!isNull(filtro.getDataFimInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Campeonato_.dataFim), filtro.getDataFimInicio()));
		}

		if (!isNull(filtro.getDataFimFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Campeonato_.dataFim), filtro.getDataFimFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
