package br.gov.ac.tce.licon.services.specs;

import org.springframework.data.jpa.domain.Specification;

public interface ISpecification<E> extends Specification<E> {
	
	default boolean isNull(Object value) {
		return value == null;
	}
	
	default boolean isNull(String value) {
		return value == null || value.trim().isEmpty();
	}

}
