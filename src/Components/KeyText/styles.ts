import styled from "styled-components";

export const Title = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
