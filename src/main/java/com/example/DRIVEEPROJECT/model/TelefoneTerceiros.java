package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class TelefoneTerceiros {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private long idTerceiros;
    private String telefone;

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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "TelefoneTerceiros{" +
                "id=" + id +
                ", idTerceiros=" + idTerceiros +
                ", telefone='" + telefone + '\'' +
                '}';
    }
}
