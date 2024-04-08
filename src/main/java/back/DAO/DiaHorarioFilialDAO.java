package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import back.DAO.Connect;
import back.model.DiaHorarioFilial;

public class DiaHorarioFilialDAO {
    
    public void inserirDiaHorario(DiaHorarioFilial diaHorario) {
        String sql = "INSERT INTO public.dia_e_horario (id_filial, hora_abertura, hora_fechamento, segunda, terca, quarta, quinta, sexta, sabado, domingo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, diaHorario.getIdFilial());
            ps.setTime(2, diaHorario.getHoraAbertura());
            ps.setTime(3, diaHorario.getHoraFechamento());
            ps.setBoolean(4, diaHorario.isSegunda());
            ps.setBoolean(5, diaHorario.isTerca());
            ps.setBoolean(6, diaHorario.isQuarta());
            ps.setBoolean(7, diaHorario.isQuinta());
            ps.setBoolean(8, diaHorario.isSexta());
            ps.setBoolean(9, diaHorario.isSabado());
            ps.setBoolean(10, diaHorario.isDomingo());
            
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir dia e horário: ", e);
        }
    }
}

