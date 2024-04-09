package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Historico;

public class HistoricoDAO {
    private final Connection connection;

    public HistoricoDAO(Connection connection) {
        this.connection = connection;
    }

    public List<Historico> listarHistorico() throws SQLException {
        List<Historico> historicoList = new ArrayList<>();
        String sql = "SELECT * FROM historico";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Historico historico = new Historico();
                    historico.setId(rs.getLong("id"));
                    historico.setCpfCliente(rs.getString("cpf_cliente"));
                    historico.setCodReservaCarro(rs.getLong("cod_reserva_carro"));
                    historico.setDataReserva(rs.getDate("data_reserva").toLocalDate());
                    historicoList.add(historico);
                }
            }
        }
        return historicoList;
    }
}
