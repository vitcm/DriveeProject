package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.CargaHr;

public class CargaHrDAO {
    // Consulta SQL para inserir uma nova linha na tabela carga_hr
    private final String INSERT_QUERY = "INSERT INTO carga_hr (horas_dia, segunda, terca, quarta, quinta, sexta, sabado, domingo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    // Consulta SQL para selecionar todas as linhas da tabela carga_hr
    private final String SELECT_ALL_QUERY = "SELECT * FROM carga_hr";
    
    // Método para inserir uma nova carga_hr no banco de dados
    public void inserirCargaHr(int horas_dia, boolean segunda, boolean terca, boolean quarta, boolean quinta, boolean sexta, boolean sabado, boolean domingo) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(INSERT_QUERY);
            preparedStatement.setInt(1, horas_dia);
            preparedStatement.setBoolean(2, segunda);
            preparedStatement.setBoolean(3, terca);
            preparedStatement.setBoolean(4, quarta);
            preparedStatement.setBoolean(5, quinta);
            preparedStatement.setBoolean(6, sexta);
            preparedStatement.setBoolean(7, sabado);
            preparedStatement.setBoolean(8, domingo);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement);
        }
    }
    
    // Método para obter todas as cargas horárias do banco de dados
    public List<CargaHr> listarCargasHr() {
        List<CargaHr> cargasHr = new ArrayList<>();
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(SELECT_ALL_QUERY);
            resultSet = preparedStatement.executeQuery();
            
            while (resultSet.next()) {
                long id = resultSet.getLong("id");
                int horasDia = resultSet.getInt("horas_dia");
                boolean segunda = resultSet.getBoolean("segunda");
                boolean terca = resultSet.getBoolean("terca");
                boolean quarta = resultSet.getBoolean("quarta");
                boolean quinta = resultSet.getBoolean("quinta");
                boolean sexta = resultSet.getBoolean("sexta");
                boolean sabado = resultSet.getBoolean("sabado");
                boolean domingo = resultSet.getBoolean("domingo");
                
                CargaHr cargaHr = new CargaHr(id, horasDia, segunda, terca, quarta, quinta, sexta, sabado, domingo);
                cargasHr.add(cargaHr);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Connect.closeConnection(connection, preparedStatement, resultSet);
        }
        
        return cargasHr;
    }
}

