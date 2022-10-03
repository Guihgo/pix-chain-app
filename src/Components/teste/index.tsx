import React from "react";
import { Container, Header, Title, TitleH2, TitleH3, Text, TextYellow, PXCArea, ReceiveButton, ReceivedButton, PayButton, DisconnectButton, ConfirmButton, ContinueButton, PrivateKey } from "./styles";

export function TestColor() {
  return (
    <div>
    <Container>
      <Header>
        <Title>
          PixChain
        </Title>
      </Header>
      <Text>
        Insira sua chave privada para acessar sua carteira
      </Text>
      <div>
        <PrivateKey placeholder="Chave privada" />
        <ConfirmButton>
          <Text>Confirmar</Text>
        </ConfirmButton>
      </div>
      <PXCArea>
        <TextYellow>Carteira A</TextYellow>
        <TitleH3>PXC 100,00</TitleH3>
      </PXCArea>
    </Container>
    </div>
  );
}
