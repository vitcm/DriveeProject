import React, { useState } from "react";
import { Container } from "./style";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <Container>{title}</Container>;
}
