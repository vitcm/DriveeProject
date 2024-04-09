package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.Transmissao;

public class TransmissaoDAO {
    
    public List<Transmissao> buscarTransmissoes() {
        List<Transmissao> transmissoes = new ArrayList<>();
        String sql = "SELECT id, nome FROM public.transmissao";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                long id = rs.getLong("id");
                String nome = rs.getString("nome");
                Transmissao transmissao = new Transmissao(id, nome);
                transmissoes.add(transmissao);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar transmissões: ", e);
        }
        return transmissoes;
    }
}

