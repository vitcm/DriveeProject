package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.AreaDeAtuacao;

public class AreaDeAtuacaoDAO {
    
    public List<AreaDeAtuacao> listarAreasDeAtuacao() {
        List<AreaDeAtuacao> areas = new ArrayList<>();
        String sql = "SELECT * FROM public.area_de_atuacao";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                AreaDeAtuacao area = new AreaDeAtuacao();
                area.setId(rs.getLong("id"));
                area.setArea(rs.getString("area"));
                
                areas.add(area);
            }
            
            return areas;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar áreas de atuação: ", e);
        }
    }
}
