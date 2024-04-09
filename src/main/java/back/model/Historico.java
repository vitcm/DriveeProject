package back.model;

import java.time.LocalDate;
import java.util.Objects;

public class Historico {
    private long id;
    private String cpfCliente;
    private long codReservaCarro;
    private LocalDate dataReserva;

    public Historico() {}

    public Historico(long id, String cpfCliente, long codReservaCarro, LocalDate dataReserva) {
        this.id = id;
        this.cpfCliente = cpfCliente;
        this.codReservaCarro = codReservaCarro;
        this.dataReserva = dataReserva;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCpfCliente() {
        return cpfCliente;
    }

    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }

    public long getCodReservaCarro() {
        return codReservaCarro;
    }

    public void setCodReservaCarro(long codReservaCarro) {
        this.codReservaCarro = codReservaCarro;
    }

    public LocalDate getDataReserva() {
        return dataReserva;
    }

    public void setDataReserva(LocalDate dataReserva) {
        this.dataReserva = dataReserva;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Historico historico = (Historico) o;
        return id == historico.id && codReservaCarro == historico.codReservaCarro && Objects.equals(cpfCliente, historico.cpfCliente) && Objects.equals(dataReserva, historico.dataReserva);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cpfCliente, codReservaCarro, dataReserva);
    }

    @Override
    public String toString() {
        return "Historico{" +
                "id=" + id +
                ", cpfCliente='" + cpfCliente + '\'' +
                ", codReservaCarro=" + codReservaCarro +
                ", dataReserva=" + dataReserva +
                '}';
    }
}

