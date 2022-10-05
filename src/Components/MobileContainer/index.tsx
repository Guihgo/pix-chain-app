import React from "react";
import { Container, Content } from "./styles";

type Props = {
  children: React.ReactNode;
};

function MobileContainer({ children }: Props) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default MobileContainer;
