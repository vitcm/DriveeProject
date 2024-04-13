package com.example.DRIVEEPROJECT.model;

import java.math.BigDecimal;
import java.sql.Date;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class ContratoFuncionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private long idFuncionario;
    private BigDecimal salario;
    private int cargaHoraria;
    private String cargo;
    private int diasDaSemana;
    private Date inicioContrato;
    private Date fimDoContrato;
    

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(long idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setSalario(BigDecimal salario) {
        this.salario = salario;
    }

    public int getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(int cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public int getDiasDaSemana() {
        return diasDaSemana;
    }

    public void setDiasDaSemana(int diasDaSemana) {
        this.diasDaSemana = diasDaSemana;
    }

    public Date getInicioContrato() {
        return inicioContrato;
    }

    public void setInicioContrato(Date inicioContrato) {
        this.inicioContrato = inicioContrato;
    }

    public Date getFimDoContrato() {
        return fimDoContrato;
    }

    public void setFimDoContrato(Date fimDoContrato) {
        this.fimDoContrato = fimDoContrato;
    }

    
}
