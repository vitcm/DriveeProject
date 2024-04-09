package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;
import back.model.Departamento;

public class DepartamentoDAO {
    
    public List<Departamento> listarDepartamentos() {
        List<Departamento> departamentos = new ArrayList<>();
        String sql = "SELECT * FROM public.departamento";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Departamento departamento = new Departamento();
                departamento.setId(rs.getLong("id"));
                departamento.setNome(rs.getString("nome"));
                departamentos.add(departamento);
            }
            
            return departamentos;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar departamentos: ", e);
        }
    }
}
