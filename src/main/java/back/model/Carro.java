package back.model;

public class Carro {
    private long id;
    private long categoria;
    private long modelo;
    private String placa;
    private long chassi;
    private long cor;
    private int qntPortas;
    private long direcao;
    private int qntAirbag;
    private int tamanhoPortaMala;
    private int cilindradas;
    private long adaptadoPcd;
    private long transmissao;
    private int qntPassageiros;
    private int ano;
    private long tipoCombustivel;
    private long licenciamento;
    private boolean ipva;
    private long renavam;
    private long status;
    private double valorDiaria;
    
    public Carro (){

    }
    
    public Carro(long id, long categoria, long modelo, String placa, long chassi, long cor, int qntPortas, long direcao,
            int qntAirbag, int tamanhoPortaMala, int cilindradas, long adaptadoPcd, long transmissao,
            int qntPassageiros, int ano, long tipoCombustivel, long licenciamento, boolean ipva, long renavam,
            long status, double valorDiaria) {
        this.id = id;
        this.categoria = categoria;
        this.modelo = modelo;
        this.placa = placa;
        this.chassi = chassi;
        this.cor = cor;
        this.qntPortas = qntPortas;
        this.direcao = direcao;
        this.qntAirbag = qntAirbag;
        this.tamanhoPortaMala = tamanhoPortaMala;
        this.cilindradas = cilindradas;
        this.adaptadoPcd = adaptadoPcd;
        this.transmissao = transmissao;
        this.qntPassageiros = qntPassageiros;
        this.ano = ano;
        this.tipoCombustivel = tipoCombustivel;
        this.licenciamento = licenciamento;
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

    public int getQntPortas() {
        return qntPortas;
    }

    public void setQntPortas(int qntPortas) {
        this.qntPortas = qntPortas;
    }

    public long getDirecao() {
        return direcao;
    }

    public void setDirecao(long direcao) {
        this.direcao = direcao;
    }

    public int getQntAirbag() {
        return qntAirbag;
    }

    public void setQntAirbag(int qntAirbag) {
        this.qntAirbag = qntAirbag;
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

    public long getAdaptadoPcd() {
        return adaptadoPcd;
    }

    public void setAdaptadoPcd(long adaptadoPcd) {
        this.adaptadoPcd = adaptadoPcd;
    }

    public long getTransmissao() {
        return transmissao;
    }

    public void setTransmissao(long transmissao) {
        this.transmissao = transmissao;
    }

    public int getQntPassageiros() {
        return qntPassageiros;
    }

    public void setQntPassageiros(int qntPassageiros) {
        this.qntPassageiros = qntPassageiros;
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

    public long getLicenciamento() {
        return licenciamento;
    }

    public void setLicenciamento(long licenciamento) {
        this.licenciamento = licenciamento;
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

