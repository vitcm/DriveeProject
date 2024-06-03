import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "./style";
import RouteRender from "./RouteRender";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { ListaFuncionarios } from "../pages/ListaFuncionarios";
import { CadastroFuncionario } from "../pages/CadastroFuncionario";
import { ListaCarros } from "../pages/ListaCarros";
import { CadastroCarro } from "../pages/CadastroCarro";
import { Tarifario } from "../pages/Tarifario";
import { ListaReserva } from "../pages/ListaReserva";
import { Historico } from "../pages/Historico";
import { ControleFrota } from "../pages/ControleFrota";
import { CadastroEspacoFis } from "../pages/CadastroEspacoFis";
import { CadastroTerceiros } from "../pages/CadastroTerceiros";
import { Financeiro } from "../pages/Financeiro";
import { ListaTerceirizados } from "../pages/ListaTerceirizados";
import { ListaEspacoFisico } from "../pages/ListaEspacoFis";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <RouteRender Component={Login} screenProps={{ isLogin: true }} />
          }
        />
        <Route
          path="/"
          element={
            <RouteRender Component={Login} screenProps={{ isLogin: true }} />
          }
        />
        <Route path="/perfil" element={<RouteRender Component={Perfil} />} />
        <Route
          path="/lista-funcionarios"
          element={<RouteRender Component={ListaFuncionarios} />}
        />
        <Route
          path="/cadastro-funcionario"
          element={<RouteRender Component={CadastroFuncionario} />}
        />
        <Route
          path="/lista-carros"
          element={<RouteRender Component={ListaCarros} />}
        />
        <Route
          path="/cadastro-carro"
          element={<RouteRender Component={CadastroCarro} />}
        />
        <Route
          path="/tarifario"
          element={<RouteRender Component={Tarifario} />}
        />
        <Route
          path="/historico"
          element={<RouteRender Component={Historico} />}
        />
        <Route
          path="/controle-frota"
          element={<RouteRender Component={ControleFrota} />}
        />
        <Route
          path="/cadastro-espaco-fisico"
          element={<RouteRender Component={CadastroEspacoFis} />}
        />
        <Route
          path="/cadastro-terceiros"
          element={<RouteRender Component={CadastroTerceiros} />}
        />
        <Route
          path="/lista-terceiros"
          element={<RouteRender Component={ListaTerceirizados} />}
        />
        <Route
          path="/lista-espaco-fisico"
          element={<RouteRender Component={ListaEspacoFisico} />}
        />
        <Route
          path="/financeiro"
          element={<RouteRender Component={Financeiro} />}
        />
        <Route
          path="/lista-reserva"
          element={<RouteRender Component={ListaReserva} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
