import themes from "../../Global/themes";
import { Container, Title } from "./styles";

type Props = {
  hasKey: boolean;
};

function KeyButton({ hasKey }: Props) {
  return (
    <Container
      onClick={() => console.log("click")}
      style={{
        backgroundColor: hasKey ? themes.colors.red : themes.colors.yellow,
      }}
    >
      <Title>Ok</Title>
    </Container>
  );
}

export default KeyButton;
