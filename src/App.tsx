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
  // const [privateKey, setPrivateKey] = useState("2d463c6a6aad40ab89c2a8ad4a25163aca86bc42c22f6deb7552061d73e38c90");

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
      // /* Get Address */
      // console.log("Address: ", walletHelper.getAddress(), walletHelper.shortAddress())

      // /* Get Balance: Base coin (BNB (bsc-mainnet) | ETH (eth-mainnet) | TBNB (bsc-testnet) ) */
      // walletHelper!.getBalance().then((balance) => {
      //   console.log(`Balance: ${balance.amount} ${balance.symbol}`)
      // })

      // /* Get Balance: Token (USDT | SHIB | PixCoin) */
      // walletHelper!.getBalance(ECurrencySymbol.PIX_COIN).then((balance) => {
      //   console.log(`Balance: ${balance.amount} ${balance.symbol}`)
      // })

      // /* Create Invoice: Base coin */
      // walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "0.01")
      // .then(ethCode => {
      //   console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode))
      // })

      // /* Create Invoice: Token */
      // walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "1.17", ECurrencySymbol.PIX_COIN)
      // .then(ethCode => {
      //   console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode))
      // })

      /* Sign Invoice: Base coin */
      // walletHelper!.signInvoice("00020126770023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:8545A014901030x202420xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B75403420xAB518cD35e0Cc361Fe7687C3CF6b81147AA62d7404029705160x2386f26fc1000006052100007110x37e11d60063042431").then(r=>{
      //   console.log(r)
      // })

      /* Sign Invoice: Token */
      // walletHelper!.signInvoice("00020126770023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:8545A027901030x302420xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B75403420xEE5A767BDB73fafD4bB50317A8A78901a81547f404029705030x006053688107110x37e11d600A81380xa9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d74000000000000000000000000000000000000000000000000103caccd1335000063047733 ").then(r=>{
      //   console.log(r)
      // })

      /* Send Signed Transaction */
      // walletHelper!.sendSignedTransaction("0xf8aa0385037e11d60082901194ee5a767bdb73fafd4bb50317a8a78901a81547f480b844a9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d74000000000000000000000000000000000000000000000000103caccd1335000081e6a097ccab46b482c99abb320ad24d87a7665df6d818f7a13bf41770b1d3a0575befa04769c71386df37133af7788695ce5af3fcfcac4ae08549f5915823c8b3b76141").then(result=>{
      //   console.log(result)
      // })
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
