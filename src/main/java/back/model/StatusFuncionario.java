package back.model;

public class StatusFuncionario {
    private long id;
    private String nome;

    public StatusFuncionario(){

    }

    public StatusFuncionario(String nome) {
        this.nome = nome;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    

}