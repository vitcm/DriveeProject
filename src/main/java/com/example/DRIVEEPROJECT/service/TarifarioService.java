package com.example.DRIVEEPROJECT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Tarifario;
import com.example.DRIVEEPROJECT.repository.TarifarioRepository;

@Service
public class TarifarioService {
    @Autowired
    private TarifarioRepository tarifarioRepository;

    public List<Tarifario> getAllTarifas() {
        return tarifarioRepository.findAll();
    }
}
