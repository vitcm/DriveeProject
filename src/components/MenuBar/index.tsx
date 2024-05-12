import React, { useState } from "react";
import { Container } from "./style";

import Logo from "../../assets/logo2.png";
import { ButtonMenu } from "../ButtonMenu";
import { useNavigate } from "react-router-dom";

export function MenuBar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handlePerfil = () => {
    navigate("/perfil");
  };
  const handleListaFunc = () => {
    navigate("/lista-funcionarios");
  };
  const handleListaCarros = () => {
    navigate("/lista-carros");
  };
  const handleTarifario = () => {
    navigate("/tarifario");
  };
  const handleHistorico = () => {
    navigate("/historico");
  };
  const handleControleFrota = () => {
    navigate("/controle-frota");
  };
  const handleEspacoFisico = () => {
    navigate("/cadastro-espaco-fisico");
  };
  const handleTerceiros = () => {
    navigate("/cadastro-terceiros");
  };
  const handleFinanceiro = () => {
    navigate("/financeiro");
  };
  const handleListaReserva = () => {
    navigate("/lista-reserva");
  };
  return (
    <Container>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <img src={Logo} alt="Logo" style={{ width: "150px" }} />
      </div>
      <ButtonMenu title="Perfil funcionário" onClick={handlePerfil} />
      <ButtonMenu title="Funcionários" onClick={handleListaFunc} />
      <ButtonMenu title="Carros" onClick={handleListaCarros} />
      <ButtonMenu title="Tarifário" onClick={handleTarifario} />
      <ButtonMenu title="Histórico" onClick={handleHistorico} />
      <ButtonMenu title="Controle da frota" onClick={handleControleFrota} />
      <ButtonMenu title="Espaços físicos" onClick={handleEspacoFisico} />
      <ButtonMenu title="Cadastro de terceirizados" onClick={handleTerceiros} />
      <ButtonMenu title="Financeiro" onClick={handleFinanceiro} />
      <ButtonMenu title="Reserva" onClick={handleListaReserva} />
      <div style={{ marginTop: "130px", width: "100%" }}>
        <ButtonMenu title="Sair" onClick={handleLogin} />
      </div>
    </Container>
  );
}
