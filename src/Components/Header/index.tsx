import React from "react";
import { Container, Title } from "./styles";

type Props = {
  children: React.ReactNode;
};

function Header() {
  return (
    <Container>
      <Title>PixChain</Title>
    </Container>
  );
}

export default Header;
