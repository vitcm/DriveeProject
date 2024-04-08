package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Carro;

public class CarroDAO {
    // Consulta SQL para inserir um novo registro na tabela carro
    private final String INSERT_QUERY = "INSERT INTO carro (categoria, modelo, placa, chassi, cor, qnt_portas, direcao, qnt_airbag, tamanho_porta_mala, cilindradas, adaptado_pcd, transmissao, qnt_passageiros, ano, tipo_combustivel, licenciamento, ipva, renavam, status, valor_diaria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    // Consulta SQL para selecionar todos os registros da tabela carro
    private final String SELECT_ALL_QUERY = "SELECT * FROM carro";
    
    // Método para inserir um novo carro no banco de dados
    public void inserirCarro(long categoria, long modelo, String placa, long chassi, long cor, int qnt_portas, long direcao, int qnt_airbag, int tamanho_porta_mala, int cilindradas, long adaptado_pcd, long transmissao, int qnt_passageiros, int ano, long tipo_combustivel, long licenciamento, boolean ipva, long renavam, long status, double valor_diaria) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(INSERT_QUERY);
            preparedStatement.setLong(1, categoria);
            preparedStatement.setLong(2, modelo);
            preparedStatement.setString(3, placa);
            preparedStatement.setLong(4, chassi);
            preparedStatement.setLong(5, cor);
            preparedStatement.setInt(6, qnt_portas);
            preparedStatement.setLong(7, direcao);
            preparedStatement.setInt(8, qnt_airbag);
            preparedStatement.setInt(9, tamanho_porta_mala);
            preparedStatement.setInt(10, cilindradas);
            preparedStatement.setLong(11, adaptado_pcd);
            preparedStatement.setLong(12, transmissao);
            preparedStatement.setInt(13, qnt_passageiros);
            preparedStatement.setInt(14, ano);
            preparedStatement.setLong(15, tipo_combustivel);
            preparedStatement.setLong(16, licenciamento);
            preparedStatement.setBoolean(17, ipva);
            preparedStatement.setLong(18, renavam);
            preparedStatement.setLong(19, status);
            preparedStatement.setDouble(20, valor_diaria);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement);
        }
    }
    
    // Método para obter todos os carros do banco de dados
    public List<Carro> listarCarros() {
        List<Carro> carros = new ArrayList<>();
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(SELECT_ALL_QUERY);
            resultSet = preparedStatement.executeQuery();
            
            while (resultSet.next()) {
                // Extrai os dados de cada linha do ResultSet e cria um objeto Carro
                // Você precisará implementar o construtor de Carro e os métodos getters e setters conforme necessário
                Carro carro = new Carro();
                carro.setId(resultSet.getLong("id"));
                carro.setCategoria(resultSet.getLong("categoria"));
                carro.setModelo(resultSet.getLong("modelo"));
                carro.setPlaca(resultSet.getString("placa"));
                carro.setChassi(resultSet.getLong("chassi"));
                carro.setCor(resultSet.getLong("cor"));
                carro.setQntPortas(resultSet.getInt("qnt_portas"));
                carro.setDirecao(resultSet.getLong("direcao"));
                carro.setQntAirbag(resultSet.getInt("qnt_airbag"));
                carro.setTamanhoPortaMala(resultSet.getInt("tamanho_porta_mala"));
                carro.setCilindradas(resultSet.getInt("cilindradas"));
                carro.setAdaptadoPcd(resultSet.getLong("adaptado_pcd"));
                carro.setTransmissao(resultSet.getLong("transmissao"));
                carro.setQntPassageiros(resultSet.getInt("qnt_passageiros"));
                carro.setAno(resultSet.getInt("ano"));
                carro.setTipoCombustivel(resultSet.getLong("tipo_combustivel"));
                carro.setLicenciamento(resultSet.getLong("licenciamento"));
                carro.setIpva(resultSet.getBoolean("ipva"));
                carro.setRenavam(resultSet.getLong("renavam"));
                carro.setStatus(resultSet.getLong("status"));
                carro.setValorDiaria(resultSet.getDouble("valor_diaria"));
                
                carros.add(carro);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement, resultSet);
        }
        
        return carros;
    }
}
