package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.EnderecoTerceiro;

public class EnderecoTerceiroDAO {
    private final Connection connection;

    public EnderecoTerceiroDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirEnderecoTerceiro(EnderecoTerceiro enderecoTerceiro) throws SQLException {
        String sql = "INSERT INTO endereco_terceiro (id_empresa, endereco, complemento, cep, cidade, uf) " +
                     "VALUES (?, ?, ?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setLong(1, enderecoTerceiro.getIdEmpresa());
            stmt.setString(2, enderecoTerceiro.getEndereco());
            stmt.setString(3, enderecoTerceiro.getComplemento());
            stmt.setString(4, enderecoTerceiro.getCep());
            stmt.setString(5, enderecoTerceiro.getCidade());
            stmt.setString(6, enderecoTerceiro.getUf());
            stmt.execute();
        }
    }

    public List<EnderecoTerceiro> listarEnderecosPorEmpresa(long idEmpresa) throws SQLException {
        List<EnderecoTerceiro> enderecos = new ArrayList<>();
        String sql = "SELECT * FROM endereco_terceiro WHERE id_empresa = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setLong(1, idEmpresa);
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    EnderecoTerceiro endereco = new EnderecoTerceiro();
                    endereco.setId(rs.getLong("id"));
                    endereco.setIdEmpresa(rs.getLong("id_empresa"));
                    endereco.setEndereco(rs.getString("endereco"));
                    endereco.setComplemento(rs.getString("complemento"));
                    endereco.setCep(rs.getString("cep"));
                    endereco.setCidade(rs.getString("cidade"));
                    endereco.setUf(rs.getString("uf"));
                    enderecos.add(endereco);
                }
            }
        }
        return enderecos;
    }
}
