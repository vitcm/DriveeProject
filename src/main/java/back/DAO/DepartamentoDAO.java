package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import back.DAO.Connect;

public class DepartamentoDAO {
    
    public List<String> buscarNomesDepartamentos() {
        List<String> nomesDepartamentos = new ArrayList<>();
        String sql = "SELECT nome FROM public.departamento";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                String nome = rs.getString("nome");
                nomesDepartamentos.add(nome);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar nomes de departamentos: ", e);
        }
        return nomesDepartamentos;
    }
}
