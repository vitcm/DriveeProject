package back.model;

public class TipoCombustivel {
    private long id;
    private String tipo;

    public TipoCombustivel(){
    }
    
    public TipoCombustivel(long id, String tipo) {
        this.id = id;
        this.tipo = tipo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    
}

