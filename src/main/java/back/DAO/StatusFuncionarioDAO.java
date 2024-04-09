package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.StatusFuncionario;

public class StatusFuncionarioDAO {
    
    public List<StatusFuncionario> listarStatusFuncionarios() {
        List<StatusFuncionario> statusFuncionarios = new ArrayList<>();
        String sql = "SELECT * FROM public.status_funcionario";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                StatusFuncionario statusFuncionario = new StatusFuncionario();
                statusFuncionario.setId(rs.getLong("id"));
                statusFuncionario.setNome(rs.getString("nome"));
                statusFuncionarios.add(statusFuncionario);
            }
            
            return statusFuncionarios;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar status de funcionários: ", e);
        }
    }
}
