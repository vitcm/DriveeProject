package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.EnderecoTerceiro;
import com.example.DRIVEEPROJECT.repository.EnderecoTerceiroRepository;

@Service
public class EnderecoTerceiroService {
    @Autowired
    private EnderecoTerceiroRepository enderecoTerceiroRepository;

    public List<EnderecoTerceiro> getAllEnderecoTerceiros() {
        return enderecoTerceiroRepository.findAll();
    }

    public Optional<EnderecoTerceiro> getEnderecoById(Long id) {
        return enderecoTerceiroRepository.findById(id);
    }

    public EnderecoTerceiro saveEnderecoTerceiros(EnderecoTerceiro enderecoTerceiro) {
        return enderecoTerceiroRepository.save(enderecoTerceiro);
    }

    public void deleteEnderecoTerceiro(Long id) {
        enderecoTerceiroRepository.deleteById(id);
    }

    public Long getLastInsertedEnderecoTerceiroId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar o último endereço
        List<EnderecoTerceiro> enderecoTerceiros = enderecoTerceiroRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum endereço retornado
        if (!enderecoTerceiros.isEmpty()) {
            return enderecoTerceiros.get(0).getId();
        } else {
            // Retornar null se não houver nenhum endereço cadastrado
            return null;
        }
    }
}
