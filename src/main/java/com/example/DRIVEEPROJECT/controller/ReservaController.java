package com.example.DRIVEEPROJECT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.DRIVEEPROJECT.model.Reserva;
import com.example.DRIVEEPROJECT.service.ReservaService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class ReservaController {
    
    @Autowired
    private ReservaService reservaService;

    @GetMapping ("/reserva/listar")
    public ResponseEntity< List <Reserva> > listarReservas(){
        List <Reserva> reservas = reservaService.getAllReservas();
        return new ResponseEntity<>(reservas, HttpStatus.OK);
    }
}
