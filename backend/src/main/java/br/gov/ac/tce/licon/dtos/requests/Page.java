package br.gov.ac.tce.licon.dtos.requests;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class Page {
	
	@NotNull
	@Min(1)
	private Integer index;
	
	@NotNull
	@Min(1)
	private Integer size;

}
