package com.example.DRIVEEPROJECT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.DRIVEEPROJECT.model.Carro;

public interface CarroRepository extends JpaRepository <Carro, Long>{
    
}
