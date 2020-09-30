package it.eng.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.eng.app.repository.rubrica.Rubrica;
import it.eng.app.request.GrafResponse;
import it.eng.app.service.impl.IRubricaService;
import it.eng.app.service.impl.ITestService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

	@Autowired
	private ITestService testService;

	@GetMapping("/dati")
	public ResponseEntity<?> findAll() {
		GrafResponse findAll = testService.findAll();
		
		
		return new ResponseEntity<>(findAll, HttpStatus.OK);
	}
	
	
	

	
}
