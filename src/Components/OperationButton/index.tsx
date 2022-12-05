import themes from "../../Global/themes";
import { Container, Title } from "./styles";

type Props = {
  isSelected: boolean;
  operation: string;
  setOperation: (operation: string) => void;
};

function OperationButton({ isSelected, operation, setOperation }: Props) {
  return (
    <Container
      onClick={() => setOperation(operation)}
      style={{
        backgroundColor: isSelected ? themes.colors.green : themes.colors.white,
      }}
    >
      <Title>{operation === "pay" ? "Pagar" : "Receber"}</Title>
    </Container>
  );
}

export default OperationButton;
