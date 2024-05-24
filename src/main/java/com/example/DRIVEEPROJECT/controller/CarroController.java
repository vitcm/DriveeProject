package com.example.DRIVEEPROJECT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.DRIVEEPROJECT.model.Carro;
import com.example.DRIVEEPROJECT.service.CarroService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class CarroController {
    @Autowired
    private CarroService carroService;

    @PutMapping ("/carro/cadastro")
    public ResponseEntity<String> cadastrarCarro (@RequestBody Carro carro){
        carroService.saveCarro(carro);
        return new ResponseEntity<>("Carro cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/carro/deletarCarro")
    public ResponseEntity<String> deletarCarro(){
        carroService.deleteCarro(carroService.getLastInsertedCarroId());
        return new ResponseEntity<>("Carro deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/carro/listar")
    public ResponseEntity< List <Carro> > listarCarros(){
        List <Carro> carros = carroService.getAllCarros();
        return new ResponseEntity<>(carros, HttpStatus.OK);
    }

    @RequestMapping(value = "/carro/cadastro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
