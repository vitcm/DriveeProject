package back.model;

public class Carro {
    private long id;
    private long categoria;
    private long modelo;
    private String placa;
    private long chassi;
    private long cor;
    private int quantidadePortas;
    private long direcao;
    private int quantidadeAirbag;
    private int tamanhoPortaMala;
    private int cilindradas;
    private long transmissao;
    private int quantidadePassageiros;
    private int ano;
    private long tipoCombustivel;
    private boolean ipva;
    private long renavam;
    private long status;
    private double valorDiaria;
    
    public Carro() {
    }

    public Carro(long categoria, long modelo, String placa, long chassi, long cor, int quantidadePortas, long direcao,
            int quantidadeAirbag, int tamanhoPortaMala, int cilindradas, long transmissao, int quantidadePassageiros,
            int ano, long tipoCombustivel, boolean ipva, long renavam, long status, double valorDiaria) {
        this.categoria = categoria;
        this.modelo = modelo;
        this.placa = placa;
        this.chassi = chassi;
        this.cor = cor;
        this.quantidadePortas = quantidadePortas;
        this.direcao = direcao;
        this.quantidadeAirbag = quantidadeAirbag;
        this.tamanhoPortaMala = tamanhoPortaMala;
        this.cilindradas = cilindradas;
        this.transmissao = transmissao;
        this.quantidadePassageiros = quantidadePassageiros;
        this.ano = ano;
        this.tipoCombustivel = tipoCombustivel;
        this.ipva = ipva;
        this.renavam = renavam;
        this.status = status;
        this.valorDiaria = valorDiaria;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCategoria() {
        return categoria;
    }

    public void setCategoria(long categoria) {
        this.categoria = categoria;
    }

    public long getModelo() {
        return modelo;
    }

    public void setModelo(long modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public long getChassi() {
        return chassi;
    }

    public void setChassi(long chassi) {
        this.chassi = chassi;
    }

    public long getCor() {
        return cor;
    }

    public void setCor(long cor) {
        this.cor = cor;
    }

    public int getQuantidadePortas() {
        return quantidadePortas;
    }

    public void setQuantidadePortas(int quantidadePortas) {
        this.quantidadePortas = quantidadePortas;
    }

    public long getDirecao() {
        return direcao;
    }

    public void setDirecao(long direcao) {
        this.direcao = direcao;
    }

    public int getQuantidadeAirbag() {
        return quantidadeAirbag;
    }

    public void setQuantidadeAirbag(int quantidadeAirbag) {
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

    public long getTransmissao() {
        return transmissao;
    }

    public void setTransmissao(long transmissao) {
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

    public long getTipoCombustivel() {
        return tipoCombustivel;
    }

    public void setTipoCombustivel(long tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public boolean isIpva() {
        return ipva;
    }

    public void setIpva(boolean ipva) {
        this.ipva = ipva;
    }

    public long getRenavam() {
        return renavam;
    }

    public void setRenavam(long renavam) {
        this.renavam = renavam;
    }

    public long getStatus() {
        return status;
    }

    public void setStatus(long status) {
        this.status = status;
    }

    public double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    
}


