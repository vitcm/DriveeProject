package back.model;

public class TelefoneTerceiros {
    private long id;
    private long idTerceiros;
    private String telefone;

    public TelefoneTerceiros() {}

    public TelefoneTerceiros(long id, long idTerceiros, String telefone) {
        this.id = id;
        this.idTerceiros = idTerceiros;
        this.telefone = telefone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdTerceiros() {
        return idTerceiros;
    }

    public void setIdTerceiros(long idTerceiros) {
        this.idTerceiros = idTerceiros;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "TelefoneTerceiros{" +
                "id=" + id +
                ", idTerceiros=" + idTerceiros +
                ", telefone='" + telefone + '\'' +
                '}';
    }
}
