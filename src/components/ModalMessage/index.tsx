import React from "react";
import {
  Overlay,
  Container,
  Header,
  Title,
  CloseIconImage,
  Body,
  IconTypeError,
  IconTypeSuccess,
  MessageBody,
} from "./style";

interface ModalMessageProps {
  title: string;
  message: string;
  type: string;
  onClose: () => void;
}

export function ModalMessage({
  title,
  message,
  type,
  onClose,
}: ModalMessageProps) {
  return (
    <Overlay>
      <Container>
        <Header>
          <Title>{title}</Title>
          <CloseIconImage onClick={onClose} />
        </Header>
        <Body>
          {type === "error" && <IconTypeError />}
          {type === "success" && <IconTypeSuccess />}
          <MessageBody>{message}</MessageBody>
        </Body>
      </Container>
    </Overlay>
  );
}
