import React, { useState } from "react";
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

<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  rel="stylesheet"
/>;

function App() {
  const [walletHelper, setWalletHelper] = useState<WalletHelper>();
  const [privateKey, setPrivateKey] = useState("");

  const loadWallet = () => {
    if (!walletHelper) {
      /* load wallet */
      try {
        setWalletHelper(new WalletHelper(privateKey));
        console.log("Wallet loaded with success!");
      } catch (e) {
        console.error("Invalid private key");
      }
    } else {
      /* unload wallet */
      setPrivateKey("");
      setWalletHelper(undefined);
    }
  };

  function handleChangePrivateKeyInput(e: any) {
    setPrivateKey(e.target.value);
  }

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
