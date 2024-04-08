package back.model;

import java.sql.Time;

public class DiaHorarioFilial {
    private long id;
    private long idFilial;
    private Time horaAbertura;
    private Time horaFechamento;
    private boolean segunda;
    private boolean terca;
    private boolean quarta;
    private boolean quinta;
    private boolean sexta;
    private boolean sabado;
    private boolean domingo;
    
    public DiaHorarioFilial() {
    }

    public DiaHorarioFilial(long idFilial, Time horaAbertura, Time horaFechamento, boolean segunda, boolean terca,
            boolean quarta, boolean quinta, boolean sexta, boolean sabado, boolean domingo) {
        this.idFilial = idFilial;
        this.horaAbertura = horaAbertura;
        this.horaFechamento = horaFechamento;
        this.segunda = segunda;
        this.terca = terca;
        this.quarta = quarta;
        this.quinta = quinta;
        this.sexta = sexta;
        this.sabado = sabado;
        this.domingo = domingo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdFilial() {
        return idFilial;
    }

    public void setIdFilial(long idFilial) {
        this.idFilial = idFilial;
    }

    public Time getHoraAbertura() {
        return horaAbertura;
    }

    public void setHoraAbertura(Time horaAbertura) {
        this.horaAbertura = horaAbertura;
    }

    public Time getHoraFechamento() {
        return horaFechamento;
    }

    public void setHoraFechamento(Time horaFechamento) {
        this.horaFechamento = horaFechamento;
    }

    public boolean isSegunda() {
        return segunda;
    }

    public void setSegunda(boolean segunda) {
        this.segunda = segunda;
    }

    public boolean isTerca() {
        return terca;
    }

    public void setTerca(boolean terca) {
        this.terca = terca;
    }

    public boolean isQuarta() {
        return quarta;
    }

    public void setQuarta(boolean quarta) {
        this.quarta = quarta;
    }

    public boolean isQuinta() {
        return quinta;
    }

    public void setQuinta(boolean quinta) {
        this.quinta = quinta;
    }

    public boolean isSexta() {
        return sexta;
    }

    public void setSexta(boolean sexta) {
        this.sexta = sexta;
    }

    public boolean isSabado() {
        return sabado;
    }

    public void setSabado(boolean sabado) {
        this.sabado = sabado;
    }

    public boolean isDomingo() {
        return domingo;
    }

    public void setDomingo(boolean domingo) {
        this.domingo = domingo;
    }

    
}

