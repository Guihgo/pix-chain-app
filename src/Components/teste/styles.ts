import styled from "styled-components";

export const Container = styled.div`
  width: 4vh;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
