package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Funcionario;
import com.example.DRIVEEPROJECT.repository.FuncionarioRepository;

@Service
public class FuncionarioService {
    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public List<Funcionario> getAllFuncionario() {
        return funcionarioRepository.findAll();
    }

    public Optional<Funcionario> getFuncionarioById(Long id) {
        return funcionarioRepository.findById(id);
    }

    public Funcionario saveFuncionario(Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    public void deleteFuncionario(Long id) {
        funcionarioRepository.deleteById(id);
    }

    public Long getLastInsertedFuncionarioId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última funcionario
        List<Funcionario> funcionarios = funcionarioRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma funcionario retornada
        if (!funcionarios.isEmpty()) {
            return funcionarios.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma funcionario cadastrada
            return null;
        }
    }
}
