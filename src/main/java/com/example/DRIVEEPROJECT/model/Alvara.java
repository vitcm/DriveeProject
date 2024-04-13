package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class Alvara {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private long idFilial;
    private String alvaraFuncionamento;
    private String registroComercial;
    private String cnpj;
    private String alvaraBombeiros;
    private String cadDetran;
    private String regSindloc;
    private String lincAmbiental;
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdFilial() {
        return idFilial;
    }

    public void setIdFilial(long idFilial) {
        this.idFilial = idFilial;
    }

    public String getAlvaraFuncionamento() {
        return alvaraFuncionamento;
    }

    public void setAlvaraFuncionamento(String alvaraFuncionamento) {
        this.alvaraFuncionamento = alvaraFuncionamento;
    }

    public String getRegistroComercial() {
        return registroComercial;
    }

    public void setRegistroComercial(String registroComercial) {
        this.registroComercial = registroComercial;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getAlvaraBombeiros() {
        return alvaraBombeiros;
    }

    public void setAlvaraBombeiros(String alvaraBombeiros) {
        this.alvaraBombeiros = alvaraBombeiros;
    }

    public String getCadDetran() {
        return cadDetran;
    }

    public void setCadDetran(String cadDetran) {
        this.cadDetran = cadDetran;
    }

    public String getRegSindloc() {
        return regSindloc;
    }

    public void setRegSindloc(String regSindloc) {
        this.regSindloc = regSindloc;
    }

    public String getLincAmbiental() {
        return lincAmbiental;
    }

    public void setLincAmbiental(String lincAmbiental) {
        this.lincAmbiental = lincAmbiental;
    }

    
}


    


