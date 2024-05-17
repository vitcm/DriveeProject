package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Historico;
import com.example.DRIVEEPROJECT.repository.HistoricoRepository;

@Service
public class HistoricoService {
    
    @Autowired
    private HistoricoRepository historicoRepository;

    public List<Historico> getAllHistoricos() {
        return historicoRepository.findAll();
    }

    public Optional<Historico> getHistoricoById(Long id) {
        return historicoRepository.findById(id);
    }

    public Historico saveHistorico(Historico historico) {
        return historicoRepository.save(historico);
    }

    public void deleteHistorico(Long id) {
        historicoRepository.deleteById(id);
    }

    public Long getLastInsertedHistoricoId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar o último historico
        List<Historico> historico = historicoRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum historico retornada
        if (!historico.isEmpty()) {
            return historico.get(0).getId();
        } else {
            // Retornar null se não houver nenhum historico cadastrado
            return null;
        }
    }
}
