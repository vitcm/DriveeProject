package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.DAO.Connect;
import back.model.Carro;

public class CarroDAO {
    
    public long inserirCarro(Carro carro) {
        String sql = "INSERT INTO public.carro (categoria, modelo, placa, chassi, cor, qnt_portas, direcao, qnt_airbag, tamanho_porta_mala, cilindradas, transmissao, qnt_passageiros, ano, tipo_combustivel, ipva, renavam, status, valor_diaria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setLong(1, carro.getCategoria());
            ps.setLong(2, carro.getModelo());
            ps.setString(3, carro.getPlaca());
            ps.setLong(4, carro.getChassi());
            ps.setLong(5, carro.getCor());
            ps.setInt(6, carro.getQuantidadePortas());
            ps.setLong(7, carro.getDirecao());
            ps.setInt(8, carro.getQuantidadeAirbag());
            ps.setInt(9, carro.getTamanhoPortaMala());
            ps.setInt(10, carro.getCilindradas());
            ps.setLong(11, carro.getTransmissao());
            ps.setInt(12, carro.getQuantidadePassageiros());
            ps.setInt(13, carro.getAno());
            ps.setLong(14, carro.getTipoCombustivel());
            ps.setBoolean(15, carro.isIpva());
            ps.setLong(16, carro.getRenavam());
            ps.setLong(17, carro.getStatus());
            ps.setDouble(18, carro.getValorDiaria());
            
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return rs.getLong("id");
            } else {
                throw new SQLException("Erro ao inserir carro, nenhum ID retornado.");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir carro: ", e);
        }
    }
    public List<Carro> listarCarros() {
        List<Carro> carros = new ArrayList<>();
        String sql = "SELECT * FROM public.carro";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Carro carro = new Carro();
                carro.setId(rs.getLong("id"));
                carro.setCategoria(rs.getLong("categoria"));
                carro.setModelo(rs.getLong("modelo"));
                carro.setPlaca(rs.getString("placa"));
                carro.setChassi(rs.getLong("chassi"));
                carro.setCor(rs.getLong("cor"));
                carro.setQuantidadePortas(rs.getInt("qnt_portas"));
                carro.setDirecao(rs.getLong("direcao"));
                carro.setQuantidadeAirbag(rs.getInt("qnt_airbag"));
                carro.setTamanhoPortaMala(rs.getInt("tamanho_porta_mala"));
                carro.setCilindradas(rs.getInt("cilindradas"));
                carro.setTransmissao(rs.getLong("transmissao"));
                carro.setQuantidadePassageiros(rs.getInt("qnt_passageiros"));
                carro.setAno(rs.getInt("ano"));
                carro.setTipoCombustivel(rs.getLong("tipo_combustivel"));
                carro.setIpva(rs.getBoolean("ipva"));
                carro.setRenavam(rs.getLong("renavam"));
                carro.setStatus(rs.getLong("status"));
                carro.setValorDiaria(rs.getDouble("valor_diaria"));
                
                carros.add(carro);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar carros: ", e);
        }
        return carros;
    }
}

