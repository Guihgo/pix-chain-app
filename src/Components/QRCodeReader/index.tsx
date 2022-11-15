import { useState } from "react";
import { QrReader } from "react-qr-reader";

interface Props {
  data: string;
  setData: (data: string) => void;
}

function QRCodeReader({ data, setData }: Props) {
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "user" }}
        videoContainerStyle={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
}

export default QRCodeReader;
