package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import back.model.Reserva;

public class ReservaDAO {
    private final Connection connection;

    public ReservaDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirReserva(Reserva reserva) throws SQLException {
        String sql = "INSERT INTO reserva (nome_carro, placa, cpf_cliente, inicio_da_reserva, " +
                     "fim_da_reserva, data_retirada, filial) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, reserva.getNomeCarro());
            stmt.setString(2, reserva.getPlaca());
            stmt.setString(3, reserva.getCpfCliente());
            stmt.setDate(4, java.sql.Date.valueOf(reserva.getInicioReserva()));
            stmt.setDate(5, java.sql.Date.valueOf(reserva.getFimReserva()));
            stmt.setDate(6, java.sql.Date.valueOf(reserva.getDataRetirada()));
            stmt.setLong(7, reserva.getFilial());
            stmt.executeUpdate();
        }
    }

    public List<Reserva> listarReservas() throws SQLException {
        List<Reserva> reservas = new ArrayList<>();
        String sql = "SELECT * FROM reserva";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Reserva reserva = new Reserva();
                    reserva.setId(rs.getLong("id"));
                    reserva.setNomeCarro(rs.getString("nome_carro"));
                    reserva.setPlaca(rs.getString("placa"));
                    reserva.setCpfCliente(rs.getString("cpf_cliente"));
                    reserva.setInicioReserva(rs.getDate("inicio_da_reserva").toLocalDate());
                    reserva.setFimReserva(rs.getDate("fim_da_reserva").toLocalDate());
                    reserva.setDataRetirada(rs.getDate("data_retirada").toLocalDate());
                    reserva.setFilial(rs.getLong("filial"));
                    reservas.add(reserva);
                }
            }
        }
        return reservas;
    }
}
