package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.Cor;

public class CorDAO {
    
    public List<Cor> buscarCores() {
        List<Cor> cores = new ArrayList<>();
        String sql = "SELECT id, nome FROM public.cor";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                long id = rs.getLong("id");
                String nome = rs.getString("nome");
                Cor cor = new Cor(id, nome);
                cores.add(cor);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar cores: ", e);
        }
        return cores;
    }
}

