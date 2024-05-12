package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.DRIVEEPROJECT.model.ComprovantePagamento;
import com.example.DRIVEEPROJECT.repository.ComprovantePagamentoRepository;

@Service
public class ComprovantePagamentoService {
    
    @Autowired
    private ComprovantePagamentoRepository comprovantePagamentoRepository;

    public List<ComprovantePagamento> getAllComprovantePagamentos() {
        return comprovantePagamentoRepository.findAll();
    }

    public Optional<ComprovantePagamento> getComprovanteById(Long id) {
        return comprovantePagamentoRepository.findById(id);
    }

    public ComprovantePagamento saveComprovantePagamento(ComprovantePagamento comprovantePagamento) {
        return comprovantePagamentoRepository.save(comprovantePagamento);
    }

    public void deleteComprovantePagamento(Long id) {
        comprovantePagamentoRepository.deleteById(id);
    }

    public Long getLastInsertedComprovantePagamentoId() {
        // Criar uma solicitação de página que retorne apenas um elemento, ordenado pelo ID em ordem decrescente
        PageRequest pageRequest = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        
        // Buscar a última comprovante pagamento
        List<ComprovantePagamento> comprovantePagamentos = comprovantePagamentoRepository.findAll(pageRequest).getContent();
        
        // Verificar se há alguma comprovante pagamento retornado
        if (!comprovantePagamentos.isEmpty()) {
            return comprovantePagamentos.get(0).getId();
        } else {
            // Retornar null se não houver nenhuma comprovante pagamento cadastrado
            return null;
        }
    }
}
