import React from "react";
import { Container } from "./styles";

type Props = {
  keyValue: string;
};

function Input({ keyValue }: Props) {
  console.log(keyValue);
  return (
    <Container
      type="text"
      value={keyValue ? keyValue : ""}
      disabled={!!keyValue}
      onChange={() => console.log("change")}
    />
  );
}

export default Input;
