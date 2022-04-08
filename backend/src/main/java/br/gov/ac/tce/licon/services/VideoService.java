package br.gov.ac.tce.licon.services;

import br.gov.ac.tce.licon.dtos.requests.VideoFiltroRequest;
import br.gov.ac.tce.licon.entities.Video;
import br.gov.ac.tce.licon.services.IService;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface VideoService extends IService<Video, VideoFiltroRequest> {

}
