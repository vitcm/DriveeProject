import React, { useState } from "react";
import { Container } from "./style";
import { Tooltip } from "react-tooltip";

interface ButtonProps {
  color?: string;
  title: string;
  height?: string;
  fontSize?: string;
  minWidth?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  color,
  title,
  height,
  fontSize,
  minWidth,
  disabled,
  onClick,
}: ButtonProps) {
  const tooltipStyle = {
    backgroundColor: "#c5968886",
    color: "white",
    fontSize: "14px",
    padding: "8px",
    borderRadius: "4px",
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <>
      <Container
        color={color}
        height={height}
        fontSize={fontSize}
        minWidth={minWidth}
        disabled={disabled}
        onClick={handleClick}
        data-tooltip-id="tooltipbutton"
        data-tooltip-content={"Botão desabilitado!"}
      >
        {title}
      </Container>
      {disabled && <Tooltip id="tooltipbutton" style={tooltipStyle} />}
    </>
  );
}
