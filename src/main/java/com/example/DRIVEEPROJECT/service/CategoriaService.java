package com.example.DRIVEEPROJECT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Categoria;
import com.example.DRIVEEPROJECT.repository.CategoriaRepository;

@Service
public class CategoriaService {
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List <Categoria> getAllCategorias(){
        List <Categoria> categorias = categoriaRepository.findAll();
        return categorias;
    }
}
