import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4.9rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const KeyContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;
