package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class Financeiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String comprovantePagamento;
    private String solicitacaoVerba;
    private long departamento;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getComprovantePagamento() {
        return comprovantePagamento;
    }

    public void setComprovantePagamento(String comprovantePagamento) {
        this.comprovantePagamento = comprovantePagamento;
    }

    public String getSolicitacaoVerba() {
        return solicitacaoVerba;
    }

    public void setSolicitacaoVerba(String solicitacaoVerba) {
        this.solicitacaoVerba = solicitacaoVerba;
    }

    public long getDepartamento() {
        return departamento;
    }

    public void setDepartamento(long departamento) {
        this.departamento = departamento;
    }
}
