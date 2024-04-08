package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AdaptacaoDAO {
    // Consulta SQL para inserir uma nova linha na tabela adaptacao
    private final String INSERT_QUERY = "INSERT INTO adaptacao (adapt_direcao, adapt_pedal, adapt_assento, adapt_acesso, adapt_controles, adapt_acessorios_seguranca, adapt_comandos_manuais) VALUES (?, ?, ?, ?, ?, ?, ?)";

    // Método para inserir uma nova adaptação no banco de dados
    public void inserirAdaptacao(boolean adapt_direcao, boolean adapt_pedal, boolean adapt_assento, boolean adapt_acesso, boolean adapt_controles, boolean adapt_acessorios_seguranca, boolean adapt_comandos_manuais) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = Connect.getConnection();
            preparedStatement = connection.prepareStatement(INSERT_QUERY);
            preparedStatement.setBoolean(1, adapt_direcao);
            preparedStatement.setBoolean(2, adapt_pedal);
            preparedStatement.setBoolean(3, adapt_assento);
            preparedStatement.setBoolean(4, adapt_acesso);
            preparedStatement.setBoolean(5, adapt_controles);
            preparedStatement.setBoolean(6, adapt_acessorios_seguranca);
            preparedStatement.setBoolean(7, adapt_comandos_manuais);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Feche os recursos
            Connect.closeConnection(connection, preparedStatement);
        }
    }
}
