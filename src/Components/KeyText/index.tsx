import React from "react";
import { Title } from "./styles";

type Props = {
  validWallet: boolean;
};

function KeyText({ validWallet }: Props) {
  return (
    <Title>
      {validWallet
        ? "Você está conectado na sua carteira!"
        : "Insira sua chave privada para acessar sua carteira"}
    </Title>
  );
}

export default KeyText;
