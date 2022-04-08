package br.gov.ac.tce.licon.services.impl;

import br.gov.ac.tce.licon.dtos.requests.VideoFiltroRequest;
import br.gov.ac.tce.licon.entities.Video;
import br.gov.ac.tce.licon.exceptions.AppException;
import br.gov.ac.tce.licon.repositories.VideoRepository;
import br.gov.ac.tce.licon.services.VideoService;
import br.gov.ac.tce.licon.services.specs.VideoSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class VideoServiceImpl extends AbstractService<Video, VideoFiltroRequest, VideoRepository> implements VideoService {

	@Autowired
	private VideoRepository repository;
	
	@Override
	public VideoRepository getRepository() {
		return repository;
	}
	
	@Override
	protected Example<Video> obterExemploChecarSeJahExiste(Video entity) throws AppException {
		Video exemplo = Video.builder()
								.titulo(entity.getTitulo())
								.build();
		return Example.of(exemplo);
	}

	@Override
	protected void lancarErroEntidadeJahExistente(Video entity) throws AppException {
		throw new AppException(String.format("Video com dado título já existe: %s", entity.getTitulo()),
				HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@Override
	protected Specification<Video> getSpecification(VideoFiltroRequest filtro) {
		return new VideoSpecification(filtro);
	}

}
