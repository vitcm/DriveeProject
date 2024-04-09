package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import back.model.Licenciamento;

public class LicenciamentoDAO {
    
    public long inserirLicenciamento(Licenciamento licenciamento) {
        String sql = "INSERT INTO public.licenciamento (codigo_crlv, taxa_transmissao, periodo_renovacao, id_carro) "
                   + "VALUES (?, ?, ?, ?) RETURNING id";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, licenciamento.getCodigoCrlv());
            ps.setDouble(2, licenciamento.getTaxaTransmissao());
            ps.setDate(3, new java.sql.Date(licenciamento.getPeriodoRenovacao().getTime()));
            ps.setLong(4, licenciamento.getIdCarro());
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return rs.getLong(1);
                } else {
                    throw new SQLException("Erro ao inserir licenciamento, nenhum ID retornado.");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir licenciamento: ", e);
        }
    }
}
