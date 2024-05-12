package com.example.DRIVEEPROJECT.repository;

import com.example.DRIVEEPROJECT.model.Filial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilialRepository extends JpaRepository<Filial, Long> {
    // Você pode adicionar métodos personalizados de consulta aqui, se necessário
}
