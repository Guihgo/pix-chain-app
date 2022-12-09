import themes from "../../Global/themes";
import { Container, Title } from "./styles";

type Props = {
  onClick: () => void;
  hasKey: boolean;
};

function KeyButton({ onClick, hasKey }: Props) {
  return (
    <Container
      onClick={onClick}
      style={{
        backgroundColor: hasKey ? themes.colors.red : themes.colors.yellow,
      }}
    >
      <Title>Ok</Title>
    </Container>
  );
}

export default KeyButton;
