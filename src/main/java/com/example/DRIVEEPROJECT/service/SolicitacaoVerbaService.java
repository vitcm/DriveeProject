package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.SolicitacaoVerba;
import com.example.DRIVEEPROJECT.repository.SolicitacaoVerbaRepository;

@Service
public class SolicitacaoVerbaService {
    @Autowired
    private SolicitacaoVerbaRepository solicitacaoVerbaRepository;

    public List<SolicitacaoVerba> getAllSolicitacaoVerbas() {
        return solicitacaoVerbaRepository.findAll();
    }

    public Optional<SolicitacaoVerba> getSolicitacaoVerbaById(Long id) {
        return solicitacaoVerbaRepository.findById(id);
    }

    public SolicitacaoVerba saveSolicitacaoVerba(SolicitacaoVerba solicitacaoVerba) {
        return solicitacaoVerbaRepository.save(solicitacaoVerba);
    }

    public void deleteSolicitacaoVerba(Long id) {
        solicitacaoVerbaRepository.deleteById(id);
    }

    public Long getLastInsertedSolicitacaoVerbaId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última solicitação verba
        List<SolicitacaoVerba> solicitacaoVerbas = solicitacaoVerbaRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma solicitação verba retornado
        if (!solicitacaoVerbas.isEmpty()) {
            return solicitacaoVerbas.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma solicitação verba cadastrado
            return null;
        }
    }
}
