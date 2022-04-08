package br.gov.ac.tce.licon.services.specs;

import br.gov.ac.tce.licon.dtos.requests.UsuarioFiltroRequest;
import br.gov.ac.tce.licon.entities.Usuario;
import br.gov.ac.tce.licon.entities.Usuario_;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class UsuarioSpecification implements ISpecification<Usuario> {

	private static final long serialVersionUID = -5862483514452364340L;
	
	private final UsuarioFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Usuario> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getNome())) {
			predicados.add(builder.equal(root.get(Usuario_.nome), filtro.getNome()));
		}

		if (!isNull(filtro.getEmail())) {
			predicados.add(builder.equal(root.get(Usuario_.email), filtro.getEmail()));
		}

		if (!isNull(filtro.getNomeCanal())) {
			predicados.add(builder.equal(root.get(Usuario_.nomeCanal), filtro.getNomeCanal()));
		}
		
		if (!isNull(filtro.getDataNascimentoInicio())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Usuario_.dataNascimento), filtro.getDataNascimentoInicio()));
		}

		if (!isNull(filtro.getDataNascimentoFim())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Usuario_.dataNascimento), filtro.getDataNascimentoFim()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
