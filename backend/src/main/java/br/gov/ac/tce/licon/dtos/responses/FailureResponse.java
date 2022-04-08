package br.gov.ac.tce.licon.dtos.responses;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FailureResponse {

	private Integer code;
	
	private List<String> messages;
	
	private String stackTrace;
	
}
