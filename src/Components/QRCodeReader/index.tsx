
import { QrReader } from "react-qr-reader";

interface Props {
  data: string;
  setData: (data: string) => void;
  onReadQRCode: () => void;
}

function QRCodeReader({ setData, onReadQRCode }: Props) {
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
            onReadQRCode();
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
