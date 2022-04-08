package br.gov.ac.tce.licon.controllers;

import br.gov.ac.tce.licon.dtos.requests.VideoFiltroRequest;
import br.gov.ac.tce.licon.entities.Video;
import br.gov.ac.tce.licon.services.VideoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Video")
@RestController
@RequestMapping("/videos")
public class VideoController extends AbstractController<Video, VideoFiltroRequest, VideoService> {

	@Autowired
	private VideoService service;
	
	@Override
	protected VideoService getService() {
		return service;
	}

}
