import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  align-items: center;
  border: none;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
