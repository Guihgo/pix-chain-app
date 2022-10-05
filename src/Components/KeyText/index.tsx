import React from "react";
import { Title } from "./styles";

type Props = {
  keyValue: string;
};

function KeyText({ keyValue }: Props) {
  return (
    <Title>
      {keyValue
        ? "Você está conectado na sua carteira!"
        : "Insira sua chave privada para acessar sua carteira"}
    </Title>
  );
}

export default KeyText;
