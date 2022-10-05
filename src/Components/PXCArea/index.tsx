import React from "react";
import { Container, TextYellow, TitleH3, WhiteBar, YellowBar } from "./styles";

type Props = {
  hasKey?: boolean;
  title?: string;
  value?: string;
};

function PXCArea({ hasKey, title, value }: Props) {
  return (
    <Container>
      <TextYellow>{title ? title : <YellowBar />}</TextYellow>
      <TitleH3>
        {value ? (
          "PXC " + value
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            PXC <WhiteBar />
          </div>
        )}
      </TitleH3>
    </Container>
  );
}

export default PXCArea;
