package com.example.DRIVEEPROJECT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.DRIVEEPROJECT.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    
}
