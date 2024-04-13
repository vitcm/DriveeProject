package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class ServicoTerceiros {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long idTerceiros;
    private String servico;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdTerceiros() {
        return idTerceiros;
    }

    public void setIdTerceiros(long idTerceiros) {
        this.idTerceiros = idTerceiros;
    }

    public String getServico() {
        return servico;
    }

    public void setServico(String servico) {
        this.servico = servico;
    }

    @Override
    public String toString() {
        return "ServicoTerceiros [id=" + id + ", idTerceiros=" + idTerceiros + ", servico=" + servico + "]";
    }

}

