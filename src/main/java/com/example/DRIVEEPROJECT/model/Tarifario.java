package com.example.DRIVEEPROJECT.model;

import java.util.Objects;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class Tarifario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nomeExtra;
    private double valorDiariaExtra;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomeExtra() {
        return nomeExtra;
    }

    public void setNomeExtra(String nomeExtra) {
        this.nomeExtra = nomeExtra;
    }

    public double getValorDiariaExtra() {
        return valorDiariaExtra;
    }

    public void setValorDiariaExtra(double valorDiariaExtra) {
        this.valorDiariaExtra = valorDiariaExtra;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tarifario tarifario = (Tarifario) o;
        return id == tarifario.id && Double.compare(tarifario.valorDiariaExtra, valorDiariaExtra) == 0 && Objects.equals(nomeExtra, tarifario.nomeExtra);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nomeExtra, valorDiariaExtra);
    }

    @Override
    public String toString() {
        return "Tarifario{" +
                "id=" + id +
                ", nomeExtra='" + nomeExtra + '\'' +
                ", valorDiariaExtra=" + valorDiariaExtra +
                '}';
    }
}
