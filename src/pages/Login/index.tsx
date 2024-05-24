import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import Logo from "../../assets/logo2.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Funcionario } from "../../interfaces";
import { ModalMessage } from "../../components/ModalMessage";

interface FuncionarioList {
  cpf: string;
  senha: string;
}

export function Login() {
  const navigate = useNavigate();
  const [funcionariosListados, setFuncionariosListados] = useState<
    Funcionario[]
  >([]);
  const [showFuncionarios, setShowFuncionarios] = useState<FuncionarioList[]>(
    []
  );
  const [cpf, setCpf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");

  const handleLogin = () => {
    const funcionario = showFuncionarios.find((func) => func.cpf === cpf);

    if (!funcionario) {
      setErrorType("Email não cadastrado.");
      showModalResultError();
      return;
    }

    if (funcionario.senha !== senha) {
      setErrorType("Senha incorreta.");
      showModalResultError();
      return;
    }

    sucessLogin();
  };

  const listarFuncionarios = async () => {
    try {
      const response = await fetch("http://localhost:8080/funcionario/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFuncionariosListados(data);
        console.log("data", data);
      } else {
        console.error("Erro ao listar funcionários");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    const filteredFuncionarios = funcionariosListados.map((func) => ({
      cpf: func.cpf,
      senha: func.senha,
    }));
    console.log("filtered funcionarios", filteredFuncionarios);
    setShowFuncionarios(filteredFuncionarios);
  }, [funcionariosListados]);

  useEffect(() => {
    listarFuncionarios();
  }, []);

  const sucessLogin = () => {
    navigate("/perfil", { state: { cpf: cpf } });
  };

  const showModalResultError = () => {
    setModalType("error");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalType === "success") {
      navigate("/perfil");
    }
  };

  return (
    <Container>
      <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      <Input
        title="CPF:"
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Input
        title="Senha:"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button
        title="ENTRAR"
        color="#CB3C12"
        $minWidth="250px"
        onClick={handleLogin}
      />
      {showModal && modalType === "error" && (
        <ModalMessage
          type={modalType}
          title={"Ops! Acesso inválido."}
          message={`${errorType}`}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
}
