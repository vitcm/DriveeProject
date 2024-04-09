package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.TipoCombustivel;

public class TipoCombustivelDAO {
    
    public List<TipoCombustivel> buscarTiposCombustivel() {
        List<TipoCombustivel> tiposCombustivel = new ArrayList<>();
        String sql = "SELECT id, tipo FROM public.tipo_combustivel";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                long id = rs.getLong("id");
                String tipo = rs.getString("tipo");
                TipoCombustivel combustivel = new TipoCombustivel(id, tipo);
                tiposCombustivel.add(combustivel);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar tipos de combustível: ", e);
        }
        return tiposCombustivel;
    }
}

