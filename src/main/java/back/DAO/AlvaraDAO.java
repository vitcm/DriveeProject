package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import back.DAO.Connect;
import back.model.Alvara;

public class AlvaraDAO {
    
    public void inserirAlvara(Alvara alvara) {
        String sql = "INSERT INTO public.alvara (id_filial, alvara_funcionamento, registro_comercial, cpnj, alvara_bombeiros, cad_detran, reg_sindloc, linc_ambiental) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, alvara.getIdFilial());
            ps.setString(2, alvara.getAlvaraFuncionamento());
            ps.setString(3, alvara.getRegistroComercial());
            ps.setString(4, alvara.getCnpj());
            ps.setString(5, alvara.getAlvaraBombeiros());
            ps.setString(6, alvara.getCadDetran());
            ps.setString(7, alvara.getRegSindloc());
            ps.setString(8, alvara.getLincAmbiental());
            
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir alvará: ", e);
        }
    }
}


