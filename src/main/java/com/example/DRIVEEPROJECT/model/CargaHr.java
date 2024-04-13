package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class CargaHr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private int horasDia;
    private boolean segunda;
    private boolean terca;
    private boolean quarta;
    private boolean quinta;
    private boolean sexta;
    private boolean sabado;
    private boolean domingo;

    

    // Métodos Getters e Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getHorasDia() {
        return horasDia;
    }

    public void setHorasDia(int horasDia) {
        this.horasDia = horasDia;
    }

    public boolean isSegunda() {
        return segunda;
    }

    public void setSegunda(boolean segunda) {
        this.segunda = segunda;
    }

    public boolean isTerca() {
        return terca;
    }

    public void setTerca(boolean terca) {
        this.terca = terca;
    }

    public boolean isQuarta() {
        return quarta;
    }

    public void setQuarta(boolean quarta) {
        this.quarta = quarta;
    }

    public boolean isQuinta() {
        return quinta;
    }

    public void setQuinta(boolean quinta) {
        this.quinta = quinta;
    }

    public boolean isSexta() {
        return sexta;
    }

    public void setSexta(boolean sexta) {
        this.sexta = sexta;
    }

    public boolean isSabado() {
        return sabado;
    }

    public void setSabado(boolean sabado) {
        this.sabado = sabado;
    }

    public boolean isDomingo() {
        return domingo;
    }

    public void setDomingo(boolean domingo) {
        this.domingo = domingo;
    }
}

