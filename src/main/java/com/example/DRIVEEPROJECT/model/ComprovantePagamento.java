package com.example.DRIVEEPROJECT.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class ComprovantePagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String anexo;
    private long departamento;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getAnexo() {
        return anexo;
    }
    public void setAnexo(String anexo) {
        this.anexo = anexo;
    }
    public long getDepartamento() {
        return departamento;
    }
    public void setDepartamento(long departamento) {
        this.departamento = departamento;
    }

    
}
