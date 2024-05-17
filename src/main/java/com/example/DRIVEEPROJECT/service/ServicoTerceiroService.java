package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.ServicoTerceiros;
import com.example.DRIVEEPROJECT.repository.ServicosTerceirosRepository;

@Service
public class ServicoTerceiroService {
    @Autowired
    private ServicosTerceirosRepository servicosTerceirosRepository;

    public List<ServicoTerceiros> getAllServicoTerceiros() {
        return servicosTerceirosRepository.findAll();
    }

    public Optional<ServicoTerceiros> getHistoricoById(Long id) {
        return servicosTerceirosRepository.findById(id);
    }

    public ServicoTerceiros saveServicoTerceiros(ServicoTerceiros servicoTerceiros) {
        return servicosTerceirosRepository.save(servicoTerceiros);
    }

    public void deleteServicoTerceiro(Long id) {
        servicosTerceirosRepository.deleteById(id);
    }

    public Long getLastInsertedServicoTerceiroId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar o último serviço
        List<ServicoTerceiros> servicoTerceiros = servicosTerceirosRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum serviço retornado
        if (!servicoTerceiros.isEmpty()) {
            return servicoTerceiros.get(0).getId();
        } else {
            // Retornar null se não houver nenhum serviço cadastrado
            return null;
        }
    }
}
