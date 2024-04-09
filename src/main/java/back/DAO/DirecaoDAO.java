package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.Direcao;

public class DirecaoDAO {
    
    public List<Direcao> buscarDirecoes() {
        List<Direcao> direcoes = new ArrayList<>();
        String sql = "SELECT id, nome FROM public.direcao";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                long id = rs.getLong("id");
                String nome = rs.getString("nome");
                Direcao direcao = new Direcao(id, nome);
                direcoes.add(direcao);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar direções: ", e);
        }
        return direcoes;
    }
}
