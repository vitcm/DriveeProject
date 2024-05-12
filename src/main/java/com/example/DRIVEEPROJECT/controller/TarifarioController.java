package com.example.DRIVEEPROJECT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.DRIVEEPROJECT.model.Tarifario;
import com.example.DRIVEEPROJECT.service.TarifarioService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class TarifarioController {

    @Autowired
    private TarifarioService tarifarioService;

    @GetMapping ("/tarifario/listar")
    public ResponseEntity< List <Tarifario> > listarTarifas(){
        List <Tarifario> tarifarios = tarifarioService.getAllTarifas();
        return new ResponseEntity<>(tarifarios, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/tarifario/cadastro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
