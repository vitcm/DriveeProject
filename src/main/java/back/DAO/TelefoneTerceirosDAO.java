package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.TelefoneTerceiros;

public class TelefoneTerceirosDAO {
    private final Connection connection;

    public TelefoneTerceirosDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirTelefoneTerceiros(TelefoneTerceiros telefoneTerceiros) throws SQLException {
        String sql = "INSERT INTO telefone_terceiros (id_terceiros, telefone) VALUES (?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setLong(1, telefoneTerceiros.getIdTerceiros());
            stmt.setString(2, telefoneTerceiros.getTelefone());
            stmt.executeUpdate();
        }
    }

    public List<TelefoneTerceiros> listarTelefonesTerceiros() throws SQLException {
        List<TelefoneTerceiros> telefones = new ArrayList<>();
        String sql = "SELECT * FROM telefone_terceiros";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    TelefoneTerceiros telefone = new TelefoneTerceiros();
                    telefone.setId(rs.getLong("id"));
                    telefone.setIdTerceiros(rs.getLong("id_terceiros"));
                    telefone.setTelefone(rs.getString("telefone"));
                    telefones.add(telefone);
                }
            }
        }
        return telefones;
    }
}

