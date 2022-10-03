import React from "react";
import { Container, Text, ReceiveButton, ReceivedButton, PayButton, DisconnectButton, ConfirmButton, ContinueButton, PrivateKey } from "./styles";

export function TestColor() {
  return (
    <div>
    <ReceiveButton>
      <Text>Receber</Text>
    </ReceiveButton>
    <ReceivedButton>
      <Text>Receber</Text>
    </ReceivedButton>
    <PayButton>
      <Text>Pagar</Text>
    </PayButton>
    <DisconnectButton>
      <Text>Desconectar</Text>
    </DisconnectButton>
    <ConfirmButton>
      <Text>Confirmar</Text>
    </ConfirmButton>
    <ContinueButton>
      <Text>Continuar</Text>
    </ContinueButton>
    <PrivateKey placeholder="Chave privada" />
    </div>
  );
}
