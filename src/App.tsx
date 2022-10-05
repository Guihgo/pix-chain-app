import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WalletHelper from "./web3";
import { ThemeProvider } from "styled-components";
import { TestColor } from "./Components/teste";
import themes from "./Global/themes";

function App() {
  const [walletHelper, setWalletHelper] = useState<WalletHelper>();
  const [privateKey, setPrivateKey] = useState("80d0aeaa9c8bc52c4b9913fdcad425adb5941b9b543fea8f523e66e1b841972a");

  const loadWallet = () => {
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
    console.log("Opening wallet using PrivateKey: ", privateKey);
    // loadWallet()
  })

  return (
    <ThemeProvider theme={themes}>
      <TestColor />
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
