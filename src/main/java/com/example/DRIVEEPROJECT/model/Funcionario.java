package com.example.DRIVEEPROJECT.model;

import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String fotoPerfil;
    private String nome;
    private long cpf;
    private long cnh;
    private String nacionalidade;
    private long celular;
    private String email;
    private String senha;
    private String dataNascimento;
    private String endereco;
    private String complemento;
    private int cep;
    private String uf;
    private String cidade;
    private String enderecoEmergencia;
    private String paisResidencia;
    private long telefoneEmergencia;
    private long localDeTrabalho;
    private long departamento;
    private long carteiraDeTrabalho;
    private long pis;
    private long tituloEleitor;
    private long certidaoCasamento;
    private long status;
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFotoPerfil() {
        return fotoPerfil;
    }

    public void setFotoPerfil(String fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getCpf() {
        return cpf;
    }

    public void setCpf(long cpf) {
        this.cpf = cpf;
    }

    public long getCnh() {
        return cnh;
    }

    public void setCnh(long cnh) {
        this.cnh = cnh;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public long getCelular() {
        return celular;
    }

    public void setCelular(long celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEnderecoEmergencia() {
        return enderecoEmergencia;
    }

    public void setEnderecoEmergencia(String enderecoEmergencia) {
        this.enderecoEmergencia = enderecoEmergencia;
    }

    public String getPaisResidencia() {
        return paisResidencia;
    }

    public void setPaisResidencia(String paisResidencia) {
        this.paisResidencia = paisResidencia;
    }

    public long getTelefoneEmergencia() {
        return telefoneEmergencia;
    }

    public void setTelefoneEmergencia(long telefoneEmergencia) {
        this.telefoneEmergencia = telefoneEmergencia;
    }

    public long getLocalDeTrabalho() {
        return localDeTrabalho;
    }

    public void setLocalDeTrabalho(long localDeTrabalho) {
        this.localDeTrabalho = localDeTrabalho;
    }

    public long getDepartamento() {
        return departamento;
    }

    public void setDepartamento(long departamento) {
        this.departamento = departamento;
    }

    public long getCarteiraDeTrabalho() {
        return carteiraDeTrabalho;
    }

    public void setCarteiraDeTrabalho(long carteiraDeTrabalho) {
        this.carteiraDeTrabalho = carteiraDeTrabalho;
    }

    public long getPis() {
        return pis;
    }

    public void setPis(long pis) {
        this.pis = pis;
    }

    public long getTituloEleitor() {
        return tituloEleitor;
    }

    public void setTituloEleitor(long tituloEleitor) {
        this.tituloEleitor = tituloEleitor;
    }

    public long getCertidaoCasamento() {
        return certidaoCasamento;
    }

    public void setCertidaoCasamento(long certidaoCasamento) {
        this.certidaoCasamento = certidaoCasamento;
    }

    public long getStatus() {
        return status;
    }

    public void setStatus(long status) {
        this.status = status;
    }

    
    
}