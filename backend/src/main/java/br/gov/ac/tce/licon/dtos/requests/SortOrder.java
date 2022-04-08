package br.gov.ac.tce.licon.dtos.requests;

import org.springframework.data.domain.Sort;

public enum SortOrder {

	asc, desc;
	
    public Sort.Direction dir() {
        return this == desc ? Sort.Direction.DESC : Sort.Direction.ASC;
    }
}
