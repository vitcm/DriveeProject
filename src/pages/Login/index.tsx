import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import Logo from "../../components/assets/logo2.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/perfil");
  };
  return (
    <Container>
      <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      <Input title="Login:" type="text" />
      <Input title="Senha:" type="text" />
      <Button
        title="ENTRAR"
        color="#CB3C12"
        $minWidth="250px"
        onClick={handleLogin}
      />
    </Container>
  );
}
