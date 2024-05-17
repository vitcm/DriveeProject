package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.TelefoneTerceiros;
import com.example.DRIVEEPROJECT.repository.TelefoneTerceiroRepository;

@Service
public class TelefoneTerceiroService {
    @Autowired
    private TelefoneTerceiroRepository telefoneTerceiroRepository;

    public List<TelefoneTerceiros> getAllTelefonesTerceiro() {
        return telefoneTerceiroRepository.findAll();
    }

    public Optional<TelefoneTerceiros> getTelefonesTerceiroById(Long id) {
        return telefoneTerceiroRepository.findById(id);
    }

    public TelefoneTerceiros saveTelefoneTerceiro(TelefoneTerceiros telefoneTerceiros) {
        return telefoneTerceiroRepository.save(telefoneTerceiros);
    }

    public void deleteTelefonesTerceiro(Long id) {
        telefoneTerceiroRepository.deleteById(id);
    }

    public Long getLastInsertedTelefoneTerceiroId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar o último telefone terceiro
        List<TelefoneTerceiros> telefoneTerceiros = telefoneTerceiroRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum telefone terceiro retornado
        if (!telefoneTerceiros.isEmpty()) {
            return telefoneTerceiros.get(0).getId();
        } else {
            // Retornar null se não houver nenhum telefone terceiro cadastrado
            return null;
        }
    }
}
