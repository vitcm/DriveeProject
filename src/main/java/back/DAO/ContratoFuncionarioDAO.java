package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import back.DAO.Connect;
import back.model.ContratoFuncionario;

public class ContratoFuncionarioDAO {
    
    public void inserirContratoFuncionario(ContratoFuncionario contrato) {
        String sql = "INSERT INTO public.contrato_funcionario (id_funcionario, salario, carga_horaria, cargo, dias_da_semana, inicio_contrato, fim_do_contrato) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, contrato.getIdFuncionario());
            ps.setBigDecimal(2, contrato.getSalario());
            ps.setInt(3, contrato.getCargaHoraria());
            ps.setString(4, contrato.getCargo());
            ps.setInt(5, contrato.getDiasDaSemana());
            ps.setDate(6, contrato.getInicioContrato());
            ps.setDate(7, contrato.getFimDoContrato());
            
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir contrato de funcionário: ", e);
        }
    }
}
