import { QrReader } from "react-qr-reader";

interface Props {
  onReadQRCode: (data: string) => void;
}

function QRCodeReader({ onReadQRCode }: Props) {
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.log(result);
            onReadQRCode(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        videoContainerStyle={{ width: "100%" }}
      />
    </>
  );
}

export default QRCodeReader;
