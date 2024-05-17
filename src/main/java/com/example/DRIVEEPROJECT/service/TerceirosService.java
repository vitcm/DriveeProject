package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Terceiros;
import com.example.DRIVEEPROJECT.repository.TerceirosRepository;

@Service
public class TerceirosService {
    @Autowired
    private TerceirosRepository terceirosRepository;

    public List<Terceiros> getAllTerceiros() {
        return terceirosRepository.findAll();
    }

    public Optional<Terceiros> getTerceiroById(Long id) {
        return terceirosRepository.findById(id);
    }

    public Terceiros saveTerceiro(Terceiros terceiro) {
        return terceirosRepository.save(terceiro);
    }

    public void deleteTerceiro(Long id) {
        terceirosRepository.deleteById(id);
    }

    public Long getLastInsertedTerceiroId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar o último historico
        List<Terceiros> terceiros = terceirosRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum terceiro retornado
        if (!terceiros.isEmpty()) {
            return terceiros.get(0).getId();
        } else {
            // Retornar null se não houver nenhum terceiro cadastrado
            return null;
        }
    }
}
