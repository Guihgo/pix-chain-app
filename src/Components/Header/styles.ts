import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4.9rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;
