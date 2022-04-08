package br.gov.ac.tce.licon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.gov.ac.tce.licon.entities.AbstractIdentificavel;

public interface IRepository<E extends AbstractIdentificavel> extends JpaRepository<E, Long>, JpaSpecificationExecutor<E> {

}
