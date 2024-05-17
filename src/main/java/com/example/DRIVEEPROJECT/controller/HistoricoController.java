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

import com.example.DRIVEEPROJECT.model.Historico;
import com.example.DRIVEEPROJECT.service.HistoricoService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class HistoricoController {
    
    @Autowired
    private HistoricoService historicoService;

    @PutMapping ("/historico/cadastro")
    public ResponseEntity<String> cadastrarCarro (@RequestBody Historico historico){
        historicoService.saveHistorico(historico);
        return new ResponseEntity<>("Historico cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/historico/deletarHistorico")
    public ResponseEntity<String> deletarCarro(){
        historicoService.deleteHistorico(historicoService.getLastInsertedHistoricoId());
        return new ResponseEntity<>("Historico deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/historico/listar")
    public ResponseEntity< List <Historico> > listarHistorico(){
        List <Historico> historico = historicoService.getAllHistoricos();
        return new ResponseEntity<>(historico, HttpStatus.OK);
    }

    @RequestMapping(value = "/historico/cadastro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
