package back.DTO;

import java.util.Date;

public class FilialRequestDTO {
    private String nome;
    private String endereco;
    private String cep;
    private String uf;
    private String cidade;
    private double valorAluguel;
    private Date inicioContrato;
    private Date fimContrato;
    private String complemento;

    // Construtores, getters e setters

    public FilialRequestDTO() {
    }

    public FilialRequestDTO(String nome, String endereco, String cep, String uf, String cidade, double valorAluguel,
                            Date inicioContrato, Date fimContrato, String complemento) {
        this.nome = nome;
        this.endereco = endereco;
        this.cep = cep;
        this.uf = uf;
        this.cidade = cidade;
        this.valorAluguel = valorAluguel;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
        this.complemento = complemento;
    }

    // Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
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

    public double getValorAluguel() {
        return valorAluguel;
    }

    public void setValorAluguel(double valorAluguel) {
        this.valorAluguel = valorAluguel;
    }

    public Date getInicioContrato() {
        return inicioContrato;
    }

    public void setInicioContrato(Date inicioContrato) {
        this.inicioContrato = inicioContrato;
    }

    public Date getFimContrato() {
        return fimContrato;
    }

    public void setFimContrato(Date fimContrato) {
        this.fimContrato = fimContrato;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}

