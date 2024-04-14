package com.example.DRIVEEPROJECT.service;

import com.example.DRIVEEPROJECT.model.Alvara;
import com.example.DRIVEEPROJECT.model.Filial;
import com.example.DRIVEEPROJECT.repository.AlvaraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Sort;

@Service
public class AlvaraService {
    @Autowired
    private AlvaraRepository alvaraRepository;

    public List<Alvara> getAllFiliais() {
        return alvaraRepository.findAll();
    }

    public Optional<Alvara> getFilialById(Long id) {
        return alvaraRepository.findById(id);
    }

    public Alvara saveFilial(Alvara alvara) {
        return alvaraRepository.save(alvara);
    }

    public void deleteFilial(Long id) {
        alvaraRepository.deleteById(id);
    }

    public Long getLastInsertedAlvaraId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última filial
        List<Alvara> alvaras = alvaraRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma filial retornada
        if (!alvaras.isEmpty()) {
            return alvaras.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma filial cadastrada
            return null;
        }
    }
}
