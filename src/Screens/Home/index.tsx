import React, { useState } from "react";
import KeyButton from "../../Components/Button";
import Input from "../../Components/Input";
import KeyText from "../../Components/KeyText";
import PXCArea from "../../Components/PXCArea";
import { Container, KeyContainer, QRCodeDiv, Text } from "./styles";
import QRCode from "../../Components/QRCode";
import QRCodeReader from "../../Components/QRCodeReader";
import OperationButton from "../../Components/OperationButton";

function Home() {
  const [keyValue, setKeyValue] = useState("");
  const [QRCodeData, setQRCodeData] = useState<any>("data");
  const [operation, setOperation] = useState("pay");
  const [payValue, setPayValue] = useState("");

  return (
    <>
      <KeyText keyValue={keyValue} />
      <KeyContainer>
        {" "}
        <div style={{ flex: "4" }}>
          <Input placeholder="Insira sua chave" setValue={setKeyValue} />
        </div>
        <div style={{ flex: "1" }}>
          <KeyButton hasKey={!!keyValue} />
        </div>
      </KeyContainer>
      {!!keyValue && (
        <>
          <Text>100 PIX</Text>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <OperationButton
              isSelected={operation === "pay"}
              operation="pay"
              setOperation={setOperation}
            />
            <OperationButton
              isSelected={operation === "receive"}
              operation="receive"
              setOperation={setOperation}
            />
          </div>
          {operation === "pay" ? (
            <QRCodeDiv style={{ marginTop: "2rem" }}>
              <QRCode value="https://google.com" />
            </QRCodeDiv>
          ) : (
            <>
              <div style={{ marginTop: "2rem" }}>
                <Input
                  placeholder="Digite o valor a ser pago"
                  setValue={setPayValue}
                />
              </div>
              <QRCodeReader data={QRCodeData} setData={setQRCodeData} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
