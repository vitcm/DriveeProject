package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.StatusCarro;

public class StatusCarroDAO {
    
    public List<StatusCarro> buscarStatusCarro() {
        List<StatusCarro> statusCarro = new ArrayList<>();
        String sql = "SELECT id, nome FROM public.status_carro";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                long id = rs.getLong("id");
                String nome = rs.getString("nome");
                StatusCarro status = new StatusCarro(id, nome);
                statusCarro.add(status);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar status do carro: ", e);
        }
        return statusCarro;
    }
}

