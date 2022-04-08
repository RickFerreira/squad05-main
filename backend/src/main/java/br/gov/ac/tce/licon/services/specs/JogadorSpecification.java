package br.gov.ac.tce.licon.services.specs;

import br.gov.ac.tce.licon.dtos.requests.JogadorFiltroRequest;
import br.gov.ac.tce.licon.entities.Contrato_;
import br.gov.ac.tce.licon.entities.Jogador;
import br.gov.ac.tce.licon.entities.Jogador_;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class JogadorSpecification implements ISpecification<Jogador> {

	private static final long serialVersionUID = 1L;
	
	private final JogadorFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Jogador> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();

		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Jogador_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getNacionalidade())) {
			predicados.add(builder.equal(root.get(Jogador_.nacionalidade), filtro.getNacionalidade()));
		}

		if (!isNull(filtro.getPosicao())) {
			predicados.add(builder.equal(root.get(Jogador_.posicao), filtro.getPosicao()));
		}

		if (!isNull(filtro.getPeChute())) {
			predicados.add(builder.equal(root.get(Jogador_.peChute), filtro.getPeChute()));
		}

		if (!isNull(filtro.getDataNascimentoInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Jogador_.dataNascimento), filtro.getDataNascimentoInicio()));
		}

		if (!isNull(filtro.getDataNascimentoFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Jogador_.dataNascimento), filtro.getDataNascimentoFim()));
		}

		if (!isNull(filtro.getAltura())) {
			predicados.add(builder.equal(root.get(Jogador_.altura), filtro.getAltura()));
		}

		if (!isNull(filtro.getMassa())) {
			predicados.add(builder.equal(root.get(Jogador_.massa), filtro.getMassa()));
		}

		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
