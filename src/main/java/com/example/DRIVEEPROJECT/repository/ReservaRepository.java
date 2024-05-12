package com.example.DRIVEEPROJECT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.DRIVEEPROJECT.model.Reserva;

public interface ReservaRepository extends JpaRepository <Reserva, Long>{
    
}
