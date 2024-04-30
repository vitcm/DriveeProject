package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.Carro;
import com.example.DRIVEEPROJECT.repository.CarroRepository;

@Service
public class CarroService {
    @Autowired
    private CarroRepository carroRepository;

    public List<Carro> getAllCarros() {
        return carroRepository.findAll();
    }

    public Optional<Carro> getCarroById(Long id) {
        return carroRepository.findById(id);
    }

    public Carro saveCarro(Carro carro) {
        return carroRepository.save(carro);
    }

    public void deleteCarro(Long id) {
        carroRepository.deleteById(id);
    }

    public Long getLastInsertedCarroId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a último Carro
        List<Carro> carros = carroRepository.findAll(pageRequest).getContent();
        
        // Verificar se há algum carro retornado
        if (!carros.isEmpty()) {
            return carros.get(0).getId();
        } else {
            // Retornar null se não houver nenhum carro cadastrado
            return null;
        }
    }
}
