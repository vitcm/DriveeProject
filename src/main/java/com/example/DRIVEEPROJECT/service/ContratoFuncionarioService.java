package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.ContratoFuncionario;
import com.example.DRIVEEPROJECT.repository.ContratoFuncionarioRepository;

@Service
public class ContratoFuncionarioService{
    
    @Autowired
    private ContratoFuncionarioRepository contratoFuncionarioRepository;

    public List<ContratoFuncionario> getAllContratoFuncionario() {
        return contratoFuncionarioRepository.findAll();
    }

    public Optional<ContratoFuncionario> getContratoFuncionarioById(Long id) {
        return contratoFuncionarioRepository.findById(id);
    }

    public ContratoFuncionario saveContratoFuncionario(ContratoFuncionario ContratoFuncionario) {
        return contratoFuncionarioRepository.save(ContratoFuncionario);
    }

    public void deleteContratoFuncionario(Long id) {
        contratoFuncionarioRepository.deleteById(id);
    }

    public Long getLastInsertedContratoFuncionarioId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última Contrato Funcionario
        List<ContratoFuncionario> contratoFuncionarios = contratoFuncionarioRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma Contrato Funcionario retornada
        if (!contratoFuncionarios.isEmpty()) {
            return contratoFuncionarios.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma Contrato Funcionarioo cadastrada
            return null;
        }
    }
}
