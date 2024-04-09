package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Funcionario;

public class FuncionarioDAO {
    
    public long inserirFuncionario(Funcionario funcionario) {
        String sql = "INSERT INTO public.funcionario "
                   + "(foto_perfil, nome, cpf, cnh, nacionalidade, celular, email, senha, data_nascimento, "
                   + "endereco, complemento, cep, uf, cidade, endereco_emergencia, pais_residencia, telefone_emergencia, "
                   + "local_de_trabalho, departamento, carteira_de_trabalho, pis, titulo_eleitor, certidao_casamento, status) "
                   + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setString(1, funcionario.getFotoPerfil());
            ps.setString(2, funcionario.getNome());
            ps.setLong(3, funcionario.getCpf());
            ps.setLong(4, funcionario.getCnh());
            ps.setString(5, funcionario.getNacionalidade());
            ps.setLong(6, funcionario.getCelular());
            ps.setString(7, funcionario.getEmail());
            ps.setString(8, funcionario.getSenha());
            ps.setString(9, funcionario.getDataNascimento());
            ps.setString(10, funcionario.getEndereco());
            ps.setString(11, funcionario.getComplemento());
            ps.setInt(12, funcionario.getCep());
            ps.setString(13, funcionario.getUf());
            ps.setString(14, funcionario.getCidade());
            ps.setString(15, funcionario.getEnderecoEmergencia());
            ps.setString(16, funcionario.getPaisResidencia());
            ps.setLong(17, funcionario.getTelefoneEmergencia());
            ps.setLong(18, funcionario.getLocalDeTrabalho());
            ps.setLong(19, funcionario.getDepartamento());
            ps.setLong(20, funcionario.getCarteiraDeTrabalho());
            ps.setLong(21, funcionario.getPis());
            ps.setLong(22, funcionario.getTituloEleitor());
            ps.setLong(23, funcionario.getCertidaoCasamento());
            ps.setLong(24, funcionario.getStatus());
            
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return rs.getLong("id");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao inserir funcionário: ", e);
        }
        
        return -1;
    }
    
    public List<Funcionario> listarFuncionarios() {
        List<Funcionario> funcionarios = new ArrayList<>();
        String sql = "SELECT * FROM public.funcionario";
        
        try (Connection con = Connect.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Funcionario funcionario = new Funcionario();
                funcionario.setId(rs.getLong("id"));
                funcionario.setFotoPerfil(rs.getString("foto_perfil"));
                funcionario.setNome(rs.getString("nome"));
                funcionario.setCpf(rs.getLong("cpf"));
                funcionario.setCnh(rs.getLong("cnh"));
                funcionario.setNacionalidade(rs.getString("nacionalidade"));
                funcionario.setCelular(rs.getLong("celular"));
                funcionario.setEmail(rs.getString("email"));
                funcionario.setSenha(rs.getString("senha"));
                funcionario.setDataNascimento(rs.getString("data_nascimento"));
                funcionario.setEndereco(rs.getString("endereco"));
                funcionario.setComplemento(rs.getString("complemento"));
                funcionario.setCep(rs.getInt("cep"));
                funcionario.setUf(rs.getString("uf"));
                funcionario.setCidade(rs.getString("cidade"));
                funcionario.setEnderecoEmergencia(rs.getString("endereco_emergencia"));
                funcionario.setPaisResidencia(rs.getString("pais_residencia"));
                funcionario.setTelefoneEmergencia(rs.getLong("telefone_emergencia"));
                funcionario.setLocalDeTrabalho(rs.getLong("local_de_trabalho"));
                funcionario.setDepartamento(rs.getLong("departamento"));
                funcionario.setCarteiraDeTrabalho(rs.getLong("carteira_de_trabalho"));
                funcionario.setPis(rs.getLong("pis"));
                funcionario.setTituloEleitor(rs.getLong("titulo_eleitor"));
                funcionario.setCertidaoCasamento(rs.getLong("certidao_casamento"));
                funcionario.setStatus(rs.getLong("status"));
                
                funcionarios.add(funcionario);
            }
            
            return funcionarios;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar funcionários: ", e);
        }
    }
}