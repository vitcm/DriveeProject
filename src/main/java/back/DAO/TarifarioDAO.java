package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Tarifario;

public class TarifarioDAO {
    private final Connection connection;

    public TarifarioDAO(Connection connection) {
        this.connection = connection;
    }

    public List<Tarifario> listarTarifarios() throws SQLException {
        List<Tarifario> tarifarios = new ArrayList<>();
        String sql = "SELECT * FROM tarifario";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Tarifario tarifario = new Tarifario();
                    tarifario.setId(rs.getLong("id"));
                    tarifario.setNomeExtra(rs.getString("nome_extra"));
                    tarifario.setValorDiariaExtra(rs.getDouble("valor_diaria_extra"));
                    tarifarios.add(tarifario);
                }
            }
        }
        return tarifarios;
    }
}

