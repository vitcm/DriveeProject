package back.model;

import java.util.Date;

public class Licenciamento {
    private long id;
    private long codigoCrlv;
    private double taxaTransmissao;
    private Date periodoRenovacao;
    private long idCarro;

    public Licenciamento(){

    }

    public Licenciamento(long codigoCrlv, double taxaTransmissao, Date periodoRenovacao, long idCarro) {
        this.codigoCrlv = codigoCrlv;
        this.taxaTransmissao = taxaTransmissao;
        this.periodoRenovacao = periodoRenovacao;
        this.idCarro = idCarro;
    }

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
