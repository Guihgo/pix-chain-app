import React, { useState } from "react";
import KeyButton from "../../Components/Button";
import Input from "../../Components/Input";
import KeyText from "../../Components/KeyText";
import PXCArea from "../../Components/PXCArea";
import { Container, KeyContainer, Title } from "./styles";

function Home() {
  const [keyValue, setKeyValue] = useState("5KjEHU53Xk5Ga...");
  return (
    <>
      <KeyText keyValue={keyValue} />
      <KeyContainer>
        {" "}
        <div style={{ flex: "2" }}>
          <Input keyValue={keyValue} />
        </div>
        <div style={{ flex: "1" }}>
          <KeyButton hasKey={!!keyValue} />
        </div>
      </KeyContainer>
      <div style={{ marginTop: "2.3rem" }}>
        <PXCArea title="Carteira A" value="100,00" />
      </div>
    </>
  );
}

export default Home;
