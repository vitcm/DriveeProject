package com.example.DRIVEEPROJECT.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Carro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String categoria;
    private String modelo;
    private String placa;
    private String chassi;
    private String cor;
    private int quantidadePortas;
    private String adaptado;
    private String direcao;
    private String quantidadeAirbag;
    private int tamanhoPortaMala;
    private int cilindradas;
    private String transmissao;
    private int quantidadePassageiros;
    private int ano;
    private String tipoCombustivel;
    private long ipva;
    private long renavam;
    private String status;
    private double valorDiaria;
    private double taxaTransmissao;
    private Date periodoRenovacao;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getChassi() {
        return chassi;
    }

    public void setChassi(String chassi) {
        this.chassi = chassi;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getQuantidadePortas() {
        return quantidadePortas;
    }

    public void setQuantidadePortas(int quantidadePortas) {
        this.quantidadePortas = quantidadePortas;
    }

    public String getAdaptado() {
        return adaptado;
    }

    public void setAdaptado(String adaptado) {
        this.adaptado = adaptado;
    }

    public String getDirecao() {
        return direcao;
    }

    public void setDirecao(String direcao) {
        this.direcao = direcao;
    }

    public String getQuantidadeAirbag() {
        return quantidadeAirbag;
    }

    public void setQuantidadeAirbag(String quantidadeAirbag) {
        this.quantidadeAirbag = quantidadeAirbag;
    }

    public int getTamanhoPortaMala() {
        return tamanhoPortaMala;
    }

    public void setTamanhoPortaMala(int tamanhoPortaMala) {
        this.tamanhoPortaMala = tamanhoPortaMala;
    }

    public int getCilindradas() {
        return cilindradas;
    }

    public void setCilindradas(int cilindradas) {
        this.cilindradas = cilindradas;
    }

    public String getTransmissao() {
        return transmissao;
    }

    public void setTransmissao(String transmissao) {
        this.transmissao = transmissao;
    }

    public int getQuantidadePassageiros() {
        return quantidadePassageiros;
    }

    public void setQuantidadePassageiros(int quantidadePassageiros) {
        this.quantidadePassageiros = quantidadePassageiros;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getTipoCombustivel() {
        return tipoCombustivel;
    }

    public void setTipoCombustivel(String tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public long getIpva() {
        return ipva;
    }

    public void setIpva(long ipva) {
        this.ipva = ipva;
    }

    public long getRenavam() {
        return renavam;
    }

    public void setRenavam(long renavam) {
        this.renavam = renavam;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public Date getPeriodoRenovacao() {
        return periodoRenovacao;
    }

    public void setPeriodoRenovacao(Date periodoRenovacao) {
        this.periodoRenovacao = periodoRenovacao;
    }

    public double getTaxaTransmissao() {
        return taxaTransmissao;
    }

    public void setTaxaTransmissao(double taxaTransmissao) {
        this.taxaTransmissao = taxaTransmissao;
    }
    
    
}


