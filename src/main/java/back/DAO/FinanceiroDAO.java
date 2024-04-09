package back.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import back.model.Financeiro;

public class FinanceiroDAO {
    private final Connection connection;

    public FinanceiroDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirFinanceiro(Financeiro financeiro) throws SQLException {
        String sql = "INSERT INTO financeiro (comprovante_pagamento, solicitacao_verba, departamento) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, financeiro.getComprovantePagamento());
            stmt.setString(2, financeiro.getSolicitacaoVerba());
            stmt.setLong(3, financeiro.getDepartamento());
            stmt.executeUpdate();
        }
    }

    public List<Financeiro> listarFinanceiro() throws SQLException {
        List<Financeiro> financeiroList = new ArrayList<>();
        String sql = "SELECT * FROM financeiro";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Financeiro financeiro = new Financeiro();
                    financeiro.setId(rs.getLong("id"));
                    financeiro.setComprovantePagamento(rs.getString("comprovante_pagamento"));
                    financeiro.setSolicitacaoVerba(rs.getString("solicitacao_verba"));
                    financeiro.setDepartamento(rs.getLong("departamento"));
                    financeiroList.add(financeiro);
                }
            }
        }
        return financeiroList;
    }
}
