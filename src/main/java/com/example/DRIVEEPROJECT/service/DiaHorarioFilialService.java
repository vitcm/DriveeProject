package com.example.DRIVEEPROJECT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.DRIVEEPROJECT.model.DiaHorarioFilial;
import com.example.DRIVEEPROJECT.repository.DiaHorarioFilialRepository;

@Service
public class DiaHorarioFilialService {
    @Autowired
    private DiaHorarioFilialRepository diaHorarioFilialRepository;

    public List<DiaHorarioFilial> getAllFiliais() {
        return diaHorarioFilialRepository.findAll();
    }

    public Optional<DiaHorarioFilial> getFilialById(Long id) {
        return diaHorarioFilialRepository.findById(id);
    }

    public DiaHorarioFilial saveFilial(DiaHorarioFilial diaHorarioFilial) {
        return diaHorarioFilialRepository.save(diaHorarioFilial);
    }

    public void deleteFilial(Long id) {
        diaHorarioFilialRepository.deleteById(id);
    }
}
