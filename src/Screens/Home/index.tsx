import { ReactNode, useEffect, useState } from "react";
import KeyButton from "../../Components/Button";
import Input from "../../Components/Input";
import KeyText from "../../Components/KeyText";
import { KeyContainer, QRCodeDiv, Text } from "./styles";
import QRCode from "../../Components/QRCode";
import QRCodeReader from "../../Components/QRCodeReader";
import OperationButton from "../../Components/OperationButton";
import { WalletHelper } from "evm-emv-web3";
import {
  BinanceSmartChain_Testnet,
  ECurrencySymbol,
} from "evm-emv-web3/networks/BinanceSmartChain";

function Home() {
  const [keyValue, setKeyValue] = useState<any>();
  const [operation, setOperation] = useState("pay");
  const [payValue, setPayValue] = useState<string>();
  const [QRCodePayer, setQRCodePayer] = useState<any>();
  const [balance, setBalance] = useState("");
  const [wallet, setWallet] = useState<WalletHelper>();
  const [loadingMessage, setLoadingMessage] = useState<ReactNode>();

  function handleOkButton() {
    setWallet(new WalletHelper(BinanceSmartChain_Testnet, keyValue));
  }

  async function onReadQRCode(data: string) {
    try {
      setLoadingMessage(
        <Text>
          Aguardando
          <br />
          pagamento...
        </Text>
      );
      const result = await wallet?.pay(
        ECurrencySymbol.PIX_COIN,
        data,
        payValue
      );
      setLoadingMessage(
        <Text>
          Pagamento realizado <br />
          com sucesso <br />
          {result?.transactionHash}
        </Text>
      );
      wallet?.getBalance().then((amount) => setBalance(amount));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    wallet
      ?.signPay(ECurrencySymbol.PIX_COIN)
      .then((signPay) => setQRCodePayer(signPay.code));
    wallet?.getBalance().then((amount) => setBalance(amount));
    console.log(QRCodePayer);
  }, [wallet]);

  return (
    <>
      <KeyText validWallet={!!wallet} />
      <KeyContainer>
        {" "}
        <div style={{ flex: "4" }}>
          <Input placeholder="Insira sua chave" setValue={setKeyValue} />
        </div>
        <div style={{ flex: "1" }}>
          <KeyButton hasKey={!!keyValue} onClick={() => handleOkButton()} />
        </div>
      </KeyContainer>
      {!!wallet && (
        <>
          <Text>{balance + " PIX"}</Text>
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
              <QRCode value={QRCodePayer} />
            </QRCodeDiv>
          ) : (
            <>
              <div style={{ marginTop: "2rem" }}>
                <Input
                  placeholder="Digite o valor a ser pago"
                  setValue={setPayValue}
                />
              </div>
              {payValue && <QRCodeReader onReadQRCode={onReadQRCode} />}
              <Text>{loadingMessage}</Text>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
