package br.gov.ac.tce.licon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.ac.tce.licon.dtos.requests.TimeFiltroRequest;
import br.gov.ac.tce.licon.entities.Time;
import br.gov.ac.tce.licon.services.TimeService;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Time")
@RestController
@RequestMapping("/times")
public class TimeController extends AbstractController<Time, TimeFiltroRequest, TimeService> {

	@Autowired
	private TimeService service;
	
	@Override
	protected TimeService getService() {
		return service;
	}

}
