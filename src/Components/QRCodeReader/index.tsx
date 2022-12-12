import { QrReader } from "react-qr-reader";

interface Props {
  onReadQRCode: (data: string, amount: string) => void;
  amount: string
}

function QRCodeReader({ onReadQRCode, amount }: Props) {
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          // alert(result);
          if (!!result) {
            console.log(result, amount);
            onReadQRCode(result?.getText(), amount);
          }

          if (!!error) {
            // console.info(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        videoContainerStyle={{ width: "100%" }}
      />
    </>
  );
}

export default QRCodeReader;
