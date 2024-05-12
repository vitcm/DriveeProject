package com.example.DRIVEEPROJECT.service;

import com.example.DRIVEEPROJECT.model.Filial;
import com.example.DRIVEEPROJECT.repository.FilialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Sort;

@Service
public class FilialService {
    
    @Autowired
    private FilialRepository filialRepository;

    public List<Filial> getAllFiliais() {
        return filialRepository.findAll();
    }

    public Optional<Filial> getFilialById(Long id) {
        return filialRepository.findById(id);
    }

    public Filial saveFilial(Filial filial) {
        return filialRepository.save(filial);
    }

    public void deleteFilial(Long id) {
        filialRepository.deleteById(id);
    }

    public Long getLastInsertedFilialId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última filial
        List<Filial> filiais = filialRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma filial retornada
        if (!filiais.isEmpty()) {
            return filiais.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma filial cadastrada
            return null;
        }
    }
}
