package com.example.DRIVEEPROJECT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Modelo;
import com.example.DRIVEEPROJECT.repository.ModeloRepository;

@Service
public class ModeloService {
    @Autowired
    private ModeloRepository modeloRepository;

    public List <Modelo> getAllModelos(){
        List <Modelo> modelos = modeloRepository.findAll();
        return modelos;
    }
}
