import React, { useState } from "react";
import { Container } from "./style";

interface ButtonMenuProps {
  title: string;
  onClick?: () => void;
}

export function ButtonMenu({ title, onClick }: ButtonMenuProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <Container onClick={handleClick}>{title}</Container>;
}
