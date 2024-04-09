package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Modelo;


public class ModeloDAO {
    
    public List<Modelo> listarModelos() {
        List<Modelo> modelos = new ArrayList<>();
        String sql = "SELECT * FROM public.modelo";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Modelo modelo = new Modelo();
                modelo.setId(rs.getLong("id"));
                modelo.setNome(rs.getString("nome"));
                modelos.add(modelo);
            }
            
            return modelos;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar modelos: ", e);
        }
    }
}
