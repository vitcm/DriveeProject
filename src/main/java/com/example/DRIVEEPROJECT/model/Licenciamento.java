package com.example.DRIVEEPROJECT.model;

import java.util.Date;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class Licenciamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private long codigoCrlv;
    private double taxaTransmissao;
    private Date periodoRenovacao;
    private long idCarro;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCodigoCrlv() {
        return codigoCrlv;
    }

    public void setCodigoCrlv(long codigoCrlv) {
        this.codigoCrlv = codigoCrlv;
    }

    public double getTaxaTransmissao() {
        return taxaTransmissao;
    }

    public void setTaxaTransmissao(double taxaTransmissao) {
        this.taxaTransmissao = taxaTransmissao;
    }

    public Date getPeriodoRenovacao() {
        return periodoRenovacao;
    }

    public void setPeriodoRenovacao(Date periodoRenovacao) {
        this.periodoRenovacao = periodoRenovacao;
    }

    public long getIdCarro() {
        return idCarro;
    }

    public void setIdCarro(long idCarro) {
        this.idCarro = idCarro;
    }
    
    
}
