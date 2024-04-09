package back.model;

import java.time.LocalDate;

public class Reserva {
    private long id;
    private String nomeCarro;
    private String placa;
    private String cpfCliente;
    private LocalDate inicioReserva;
    private LocalDate fimReserva;
    private LocalDate dataRetirada;
    private long filial;

    public Reserva() {}

    public Reserva(long id, String nomeCarro, String placa, String cpfCliente, LocalDate inicioReserva,
                   LocalDate fimReserva, LocalDate dataRetirada, long filial) {
        this.id = id;
        this.nomeCarro = nomeCarro;
        this.placa = placa;
        this.cpfCliente = cpfCliente;
        this.inicioReserva = inicioReserva;
        this.fimReserva = fimReserva;
        this.dataRetirada = dataRetirada;
        this.filial = filial;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomeCarro() {
        return nomeCarro;
    }

    public void setNomeCarro(String nomeCarro) {
        this.nomeCarro = nomeCarro;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getCpfCliente() {
        return cpfCliente;
    }

    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }

    public LocalDate getInicioReserva() {
        return inicioReserva;
    }

    public void setInicioReserva(LocalDate inicioReserva) {
        this.inicioReserva = inicioReserva;
    }

    public LocalDate getFimReserva() {
        return fimReserva;
    }

    public void setFimReserva(LocalDate fimReserva) {
        this.fimReserva = fimReserva;
    }

    public LocalDate getDataRetirada() {
        return dataRetirada;
    }

    public void setDataRetirada(LocalDate dataRetirada) {
        this.dataRetirada = dataRetirada;
    }

    public long getFilial() {
        return filial;
    }

    public void setFilial(long filial) {
        this.filial = filial;
    }

    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", nomeCarro='" + nomeCarro + '\'' +
                ", placa='" + placa + '\'' +
                ", cpfCliente='" + cpfCliente + '\'' +
                ", inicioReserva=" + inicioReserva +
                ", fimReserva=" + fimReserva +
                ", dataRetirada=" + dataRetirada +
                ", filial=" + filial +
                '}';
    }
}
