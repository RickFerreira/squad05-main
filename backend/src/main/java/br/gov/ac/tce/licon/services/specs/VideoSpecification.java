package br.gov.ac.tce.licon.services.specs;

import br.gov.ac.tce.licon.dtos.requests.VideoFiltroRequest;
import br.gov.ac.tce.licon.entities.Video_;
import br.gov.ac.tce.licon.entities.Video;
import lombok.AllArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class VideoSpecification implements ISpecification<Video> {

	private static final long serialVersionUID = 2670654722354129036L;

	private final VideoFiltroRequest filtro;

	@Override
	public Predicate toPredicate(Root<Video> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		List<Predicate> predicados = new ArrayList<>();
		
		if (!isNull(filtro.getTitulo())) {
			predicados.add(builder.equal(root.get(Video_.titulo), filtro.getTitulo()));
		}

		if (!isNull(filtro.getDescricao())) {
			predicados.add(builder.equal(root.get(Video_.descricao), filtro.getDescricao()));
		}

		if (!isNull(filtro.getInfantil())) {
			predicados.add(builder.equal(root.get(Video_.infantil), filtro.getInfantil()));
		}
		
		if (!isNull(filtro.getDuracaoInicial())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Video_.duracao), filtro.getDuracaoInicial()));
		}

		if (!isNull(filtro.getDuracaoFinal())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Video_.duracao), filtro.getDuracaoFinal()));
		}
		
		if (!isNull(filtro.getTamanhoArquivoInicial())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Video_.tamanhoArquivo), filtro.getTamanhoArquivoInicial()));
		}

		if (!isNull(filtro.getTamanhoArquivoFinal())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Video_.tamanhoArquivo), filtro.getTamanhoArquivoFinal()));
		}

		if (!isNull(filtro.getDataPublicacaoInicial())) {
			predicados.add(builder.greaterThanOrEqualTo(root.get(Video_.dataPublicacao), filtro.getDataPublicacaoInicial()));
		}

		if (!isNull(filtro.getDataPublicacaoFinal())) {
			predicados.add(builder.lessThanOrEqualTo(root.get(Video_.dataPublicacao), filtro.getDataPublicacaoFinal()));
		}
		
		return builder.and(predicados.toArray(new Predicate[0]));
	}
	
}
