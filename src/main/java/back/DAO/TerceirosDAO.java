package back.DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import back.model.Terceiros;

public class TerceirosDAO {

    public long inserirTerceiro(Terceiros terceiro) {
        String sql = "INSERT INTO public.terceiros (nome_empresa, cnpj, inicio_contrato, fim_contrato, id_funcionario, contrato, area_atuacao, ativo) "
                     + "VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setString(1, terceiro.getNomeEmpresa());
            ps.setString(2, terceiro.getCnpj());
            ps.setDate(3, new java.sql.Date(terceiro.getInicioContrato().getTime()));
            ps.setDate(4, new java.sql.Date(terceiro.getFimContrato().getTime()));
            ps.setLong(5, terceiro.getIdFuncionario());
            ps.setString(6, terceiro.getContrato());
            ps.setLong(7, terceiro.getAreaAtuacao());
            ps.setBoolean(8, terceiro.isAtivo());
            
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return rs.getLong(1); // Retorna o ID do terceiro inserido
            } else {
                throw new SQLException("Nenhum ID retornado após inserção do terceiro.");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir terceiro: ", e);
        }
    }

    public Terceiros obterTerceiroPorId(long id) {
        String sql = "SELECT * FROM public.terceiros WHERE id = ?";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, id);
            ResultSet rs = ps.executeQuery();
            
            if (rs.next()) {
                Terceiros terceiro = new Terceiros();
                terceiro.setId(rs.getLong("id"));
                terceiro.setNomeEmpresa(rs.getString("nome_empresa"));
                terceiro.setCnpj(rs.getString("cnpj"));
                terceiro.setInicioContrato(rs.getDate("inicio_contrato"));
                terceiro.setFimContrato(rs.getDate("fim_contrato"));
                terceiro.setIdFuncionario(rs.getLong("id_funcionario"));
                terceiro.setContrato(rs.getString("contrato"));
                terceiro.setAreaAtuacao(rs.getLong("area_atuacao"));
                terceiro.setAtivo(rs.getBoolean("ativo"));
                
                return terceiro;
            } else {
                return null;
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao obter terceiro por ID: ", e);
        }
    }
}
