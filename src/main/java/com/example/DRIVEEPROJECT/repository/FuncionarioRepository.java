package com.example.DRIVEEPROJECT.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.DRIVEEPROJECT.model.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
    Optional<Funcionario> findByCpf(String cpf);
}

