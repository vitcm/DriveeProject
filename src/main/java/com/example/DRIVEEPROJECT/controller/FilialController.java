package com.example.DRIVEEPROJECT.controller;

import com.example.DRIVEEPROJECT.model.Alvara;
import com.example.DRIVEEPROJECT.model.DiaHorarioFilial;
import com.example.DRIVEEPROJECT.model.Filial;
import com.example.DRIVEEPROJECT.service.AlvaraService;
import com.example.DRIVEEPROJECT.service.DiaHorarioFilialService;
import com.example.DRIVEEPROJECT.service.FilialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class FilialController {

    @Autowired
    private FilialService filialService;

    @PutMapping ("/filial/cadastro")
public ResponseEntity<String> cadastrarFilial(@RequestBody Filial filial) {
    filialService.saveFilial(filial);
    return new ResponseEntity<>("Filial cadastrada com sucesso", HttpStatus.OK);
}

    @Autowired
    private AlvaraService alvaraService;

    @PutMapping ("/filial/cadastroAlvara")
public ResponseEntity<String> cadastrarAlvara(@RequestBody Alvara alvara) {
    alvara.setIdFilial(filialService.getLastInsertedFilialId());
    alvaraService.saveFilial(alvara);
    return new ResponseEntity<>("Alvara cadastrado com sucesso", HttpStatus.OK);
}

@Autowired
private DiaHorarioFilialService diaHorarioFilialService;

@PutMapping ("/filial/cadastroDiaHorarioFilial")
public ResponseEntity<String> cadastrarDiaHorarioFilial(@RequestBody DiaHorarioFilial diaHorarioFilial) {
diaHorarioFilial.setIdFilial(filialService.getLastInsertedFilialId());
diaHorarioFilialService.saveFilial(diaHorarioFilial);
return new ResponseEntity<>("Dia e Horario cadastrado com sucesso", HttpStatus.OK);
}

@DeleteMapping ("/filial/deletarFilial")
public ResponseEntity<String> deletarFilial() {
    filialService.deleteFilial(filialService.getLastInsertedFilialId());
    return new ResponseEntity<>("Filial deletado com sucesso", HttpStatus.OK);
}

@DeleteMapping ("/filial/deletarAlvara")
public ResponseEntity<String> deletarAlvara() {
    alvaraService.deleteFilial(alvaraService.getLastInsertedAlvaraId());
    return new ResponseEntity<>("Alvara deletado com sucesso", HttpStatus.OK);
}


@RequestMapping(value = "/filial/cadastro", method = RequestMethod.OPTIONS)
public ResponseEntity<?> options() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
    headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
    headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
    return new ResponseEntity<>(headers, HttpStatus.OK);
}


    
}
    

