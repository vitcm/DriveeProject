package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.ServicoTerceiros;

public class ServicoTerceirosDAO {
    private final Connection connection;

    public ServicoTerceirosDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirServicoTerceiros(ServicoTerceiros servicoTerceiros) throws SQLException {
        String sql = "INSERT INTO servico_terceiros (id_terceiros, servico) VALUES (?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setLong(1, servicoTerceiros.getIdTerceiros());
            stmt.setString(2, servicoTerceiros.getServico());
            stmt.executeUpdate();
        }
    }

    public List<ServicoTerceiros> listarServicosTerceiros() throws SQLException {
        List<ServicoTerceiros> servicos = new ArrayList<>();
        String sql = "SELECT * FROM servico_terceiros";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    ServicoTerceiros servico = new ServicoTerceiros();
                    servico.setId(rs.getLong("id"));
                    servico.setIdTerceiros(rs.getLong("id_terceiros"));
                    servico.setServico(rs.getString("servico"));
                    servicos.add(servico);
                }
            }
        }
        return servicos;
    }
}
