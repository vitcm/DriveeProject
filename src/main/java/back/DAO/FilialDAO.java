package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import back.model.Filial;

public class FilialDAO {
    private final String INSERT_QUERY = "INSERT INTO filial (nome, endereco, cep, uf, cidade, valor_aluguel, inicio_contrato, fim_contrato, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    private final String SELECT_ALL_QUERY = "SELECT * FROM filial";
    
    // Método para inserir uma nova filial no banco de dados
    public void inserirFilial(Filial filial) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(INSERT_QUERY);
            preparedStatement.setString(1, filial.getNome());
            preparedStatement.setString(2, filial.getEndereco());
            preparedStatement.setString(3, filial.getCep());
            preparedStatement.setString(4, filial.getUf());
            preparedStatement.setString(5, filial.getCidade());
            preparedStatement.setDouble(6, filial.getValorAluguel());
            preparedStatement.setDate(7, new java.sql.Date(filial.getInicioContrato().getTime()));
            preparedStatement.setDate(8, new java.sql.Date(filial.getFimContrato().getTime()));
            preparedStatement.setString(9, filial.getComplemento());

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement);
        }
    }
    
    // Método para obter todas as filiais do banco de dados
    public List<Filial> listarFiliais() {
        List<Filial> filiais = new ArrayList<>();
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(SELECT_ALL_QUERY);
            resultSet = preparedStatement.executeQuery();
            
            while (resultSet.next()) {
                Filial filial = new Filial();
                filial.setId(resultSet.getLong("id"));
                filial.setNome(resultSet.getString("nome"));
                filial.setEndereco(resultSet.getString("endereco"));
                filial.setCep(resultSet.getString("cep"));
                filial.setUf(resultSet.getString("uf"));
                filial.setCidade(resultSet.getString("cidade"));
                filial.setValorAluguel(resultSet.getDouble("valor_aluguel"));
                filial.setInicioContrato(resultSet.getDate("inicio_contrato"));
                filial.setFimContrato(resultSet.getDate("fim_contrato"));
                filial.setComplemento(resultSet.getString("complemento"));
                
                filiais.add(filial);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement, resultSet);
        }
        
        return filiais;
    }
}



