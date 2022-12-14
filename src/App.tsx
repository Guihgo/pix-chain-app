import "./App.css";

import { ThemeProvider } from "styled-components";
import themes from "./Global/themes";
import MobileContainer from "./Components/MobileContainer";
import Header from "./Components/Header";
import Router from "./routes";

<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  rel="stylesheet"
/>;

function App() {
  // const [walletHelper, setWalletHelper] = useState<WalletHelper>();
  // const [privateKey] = useState("80d0aeaa9c8bc52c4b9913fdcad425adb5941b9b543fea8f523e66e1b841972a");
  // const [privateKey, setPrivateKey] = useState("2d463c6a6aad40ab89c2a8ad4a25163aca86bc42c22f6deb7552061d73e38c90");

  // const loadWallet = async () => {
  //   /* load wallet */
  //   try {
  //     console.log("Opening wallet using PrivateKey: ", privateKey);
  //     setWalletHelper(new WalletHelper(BinanceSmartChain_Testnet, privateKey));
  //     console.log("Wallet loaded with success!");
  //   } catch (e) {
  //     console.error("Invalid private key");
  //   }
  // };
  // const unloadWallet = () => {
  //   /* unload wallet */
  //   setPrivateKey("");
  //   setWalletHelper(undefined);
  // }

  // function handleChangePrivateKeyInput(e: any) {
  //   // setPrivateKey(e.target.value);
  // }

  // useEffect(() => {
  //   if (!walletHelper) {
  //     loadWallet()
  //   } else {
  //     /* Get Address */
  //     console.log("Address: ", walletHelper.getAddress(), walletHelper.shortAddress())

  //     /* Get Balance: Base coin (BNB (bsc-mainnet) | ETH (eth-mainnet) | TBNB (bsc-testnet) ) */
  //     // walletHelper!.getBalance().then((balance) => {
  //     //   console.log(`Balance: ${balance} ${walletHelper.getBaseCurrency().symbol}`)
  //     // })

  //     // /* Get Balance: Token (USDT | SHIB | PixCoin) */
  //     // walletHelper!.getBalance(walletHelper.getCurrency(ECurrencySymbol.PIX_COIN)).then((balance) => {
  //     //   console.log(`Balance: ${balance} ${walletHelper.getCurrency(ECurrencySymbol.PIX_COIN).symbol}`)
  //     // })

  //     // /* Create Invoice: Base coin */
  //     // walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "0.01")
  //     // .then(ethCode => {
  //     //   console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode))
  //     // })

  //     // /* Create Invoice: Token */
  //     // walletHelper!.createInvoice("0xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B754", "1.17", walletHelper.getCurrency(ECurrencySymbol.PIX_COIN))
  //     // .then(ethCode => {
  //     //   console.log(`Ethreum Transaction Code: `, ethCode, EthereumCode.parse(ethCode, walletHelper.getCurrency(ECurrencySymbol.PIX_COIN).token?.abi))
  //     // })

  //     /* Sign Invoice: Base coin */
  //     // walletHelper!.signInvoice("00020126770023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:8545A014901030xa02420xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B75403420xAB518cD35e0Cc361Fe7687C3CF6b81147AA62d7404029705160x2386f26fc1000006052100007110x37e11d60063043841").then(r=>{
  //     //   console.log(r)
  //     // })

  //     /* Sign Invoice: Token */
  //     // walletHelper!.signInvoice("00020126770023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:8545A027901030xb02420xc7BE55e895Ee523EA67Ac52cDd55f927BCF6B75403420xEE5A767BDB73fafD4bB50317A8A78901a81547f404029705030x006053688107110x37e11d600A81380xa9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d74000000000000000000000000000000000000000000000000103caccd1335000063044941").then(r=>{
  //     //   console.log(r)
  //     // })

  //     /* Send Signed Transaction */
  //     // walletHelper!.sendSignedTransaction("0xf8aa0b85037e11d60082901194ee5a767bdb73fafd4bb50317a8a78901a81547f480b844a9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d74000000000000000000000000000000000000000000000000103caccd1335000081e6a04c3cf7b1c6a65aa3cbb66b0e86c3d715565e85a047fc764269b11ddf10873916a062b642a1bf15ad990010be14608c8cd959442e73a4e7b100c0b801cec7bff938").then(result=>{
  //     //   console.log(result)
  //     // })
  //   }
  // })

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
