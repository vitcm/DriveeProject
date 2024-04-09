package back.model;

public class AreaDeAtuacao {
    private long id;
    private String area;
    
    public AreaDeAtuacao() {
    }

    public AreaDeAtuacao(String area) {
        this.area = area;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    
    
}