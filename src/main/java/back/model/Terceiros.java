package back.model;

import java.util.Date;

public class Terceiros {
    private long id;
    private String nomeEmpresa;
    private String cnpj;
    private Date inicioContrato;
    private Date fimContrato;
    private long idFuncionario;
    private String contrato;
    private long areaAtuacao;
    private boolean ativo;

    public Terceiros(){

    }

    public Terceiros(String nomeEmpresa, String cnpj, Date inicioContrato, Date fimContrato, long idFuncionario,
            String contrato, long areaAtuacao, boolean ativo) {
        this.nomeEmpresa = nomeEmpresa;
        this.cnpj = cnpj;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
        this.idFuncionario = idFuncionario;
        this.contrato = contrato;
        this.areaAtuacao = areaAtuacao;
        this.ativo = ativo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
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

    public long getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(long idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public String getContrato() {
        return contrato;
    }

    public void setContrato(String contrato) {
        this.contrato = contrato;
    }

    public long getAreaAtuacao() {
        return areaAtuacao;
    }

    public void setAreaAtuacao(long areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    
}
