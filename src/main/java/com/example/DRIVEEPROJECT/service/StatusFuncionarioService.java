package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.StatusFuncionario;
import com.example.DRIVEEPROJECT.repository.StatusFuncionarioRepository;

@Service
public class StatusFuncionarioService {
    @Autowired
    private StatusFuncionarioRepository statusFuncionarioRepository;

    public List<StatusFuncionario> getAllStatusFuncionario() {
        return statusFuncionarioRepository.findAll();
    }

    public Optional<StatusFuncionario> getStatusFuncionarioById(Long id) {
        return statusFuncionarioRepository.findById(id);
    }

    public StatusFuncionario saveStatusFuncionario(StatusFuncionario funcionario) {
        return statusFuncionarioRepository.save(funcionario);
    }

    public void deleteStatusFuncionario(Long id) {
        statusFuncionarioRepository.deleteById(id);
    }

    public Long getLastInsertedStatusFuncionarioId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última funcionario
        List<StatusFuncionario> statusFuncionarios = statusFuncionarioRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma funcionario retornada
        if (!statusFuncionarios.isEmpty()) {
            return statusFuncionarios.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma funcionario cadastrada
            return null;
        }
    }
}
