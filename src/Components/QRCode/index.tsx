import { QRCodeSVG } from "qrcode.react";
import React from "react";

type Props = {
  value: string;
};

function QRCode({ value }: Props) {
  return (
    <QRCodeSVG
      value={value}
      size={128}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
    />
  );
}

export default QRCode;
