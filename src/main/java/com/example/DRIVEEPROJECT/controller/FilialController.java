package com.example.DRIVEEPROJECT.controller;

import com.example.DRIVEEPROJECT.model.Filial;
import com.example.DRIVEEPROJECT.service.FilialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin("localhost:3000")
public class FilialController {

    @Autowired
    private FilialService filialService;

    @PutMapping ("/filial/cadastro")
    public void cadastrarFilial() {
        Filial requestDTO = new Filial();
        requestDTO.setNome("Nome da Filial");
        requestDTO.setEndereco("Endereço da Filial");
        requestDTO.setCep("12345-678");
        requestDTO.setUf("SP");
        requestDTO.setCidade("São Paulo");
        requestDTO.setValorAluguel(1500.00);
        requestDTO.setInicioContrato(java.sql.Date.valueOf("2024-04-08"));
        requestDTO.setFimContrato(java.sql.Date.valueOf("2026-04-08"));
        requestDTO.setComplemento("Complemento do endereço");
        filialService.saveFilial(requestDTO);
    }
    
}
    

