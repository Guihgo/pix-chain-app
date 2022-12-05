import { Container } from "./styles";

type Props = {
  placeholder: string;
  setValue: (key: string) => void;
};

function Input({ placeholder, setValue }: Props) {
  return (
    <Container
      type="text"
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
