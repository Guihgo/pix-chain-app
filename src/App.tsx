import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WalletHelper from "./web3";
import { ThemeProvider } from "styled-components";
import { TestColor } from "./Components/teste";
import themes from "./Global/themes";
import MobileContainer from "./Components/MobileContainer";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import Router from "./routes";
import { ECurrencySymbol } from "./web3/types";
import { EthereumCode } from "emvqrcode-tools";

<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  rel="stylesheet"
/>;

function App() {
  const [walletHelper, setWalletHelper] = useState<WalletHelper>();
  const [privateKey, setPrivateKey] = useState("80d0aeaa9c8bc52c4b9913fdcad425adb5941b9b543fea8f523e66e1b841972a");

  const loadWallet = async () => {
    /* load wallet */
    try {
      console.log("Opening wallet using PrivateKey: ", privateKey);
      setWalletHelper(new WalletHelper(privateKey));
      console.log("Wallet loaded with success!");
    } catch (e) {
      console.error("Invalid private key");
    }
  };
  const unloadWallet = () => {
    /* unload wallet */
    setPrivateKey("");
    setWalletHelper(undefined);
  }

  function handleChangePrivateKeyInput(e: any) {
    // setPrivateKey(e.target.value);
  }

  useEffect(() => {
    if (!walletHelper) {
      loadWallet()
    } else {
      /* Get Address */
      console.log("Address: ", walletHelper.getAddress(), walletHelper.shortAddress())

      /* Get Balance: Base coin (BNB (bsc-mainnet) | ETH (eth-mainnet) | TBNB (bsc-testnet) ) */
      walletHelper!.getBalance().then((balance) => {
        console.log(`Balance: ${balance.amount} ${balance.symbol}`)
      })

      /* Get Balance: Token (USDT | SHIB | PixCoin) */
      walletHelper!.getBalance(ECurrencySymbol.PIX_COIN).then((balance) => {
        console.log(`Balance: ${balance.amount} ${balance.symbol}`)
      })

      /* Create Invoice: Base coin */
      walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "0.01")
      .then(ethCode => {
        console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode))
      })

      /* Create Invoice: Token */
      walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "5.17", ECurrencySymbol.PIX_COIN)
      .then(ethCode => {
        console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode))
      })
    }
  })

  return (
    <ThemeProvider theme={themes}>
      <Header />
      <MobileContainer>
        <Router />
      </MobileContainer>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Pix Chain APP</p>

          {walletHelper ? (
            <div>
              <p>
                Your address is:{" "}
                <a
                  target="_blank"
                  href={walletHelper.getExplorerAddressLink(
                    walletHelper.getAddress()
                  )}
                  rel="noreferrer"
                >
                  <code>
                    {walletHelper.shortAddress(walletHelper.getAddress())}
                  </code>
                </a>
              </p>
              <button onClick={loadWallet}>Disconnect</button>
            </div>
          ) : (
            <div>
              <input
                placeholder="Paste your private key"
                type={"password"}
                onChange={handleChangePrivateKeyInput}
              />
              <button onClick={loadWallet}>Connect</button>
            </div>
          )}
        </header>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
