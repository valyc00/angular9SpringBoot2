package it.eng.app.service.impl;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import it.eng.app.repository.rubrica.Rubrica;



public interface IRubricaService {

	List<Rubrica> findAll();

	void save(Rubrica rubrica);

	Page<Rubrica> findAllPage(Pageable pageable);

}