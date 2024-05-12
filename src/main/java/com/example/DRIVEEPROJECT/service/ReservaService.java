package com.example.DRIVEEPROJECT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Reserva;
import com.example.DRIVEEPROJECT.repository.ReservaRepository;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;
    
    public List <Reserva> getAllReservas(){
        List <Reserva> reservas = reservaRepository.findAll();
        return reservas;
    }
}
