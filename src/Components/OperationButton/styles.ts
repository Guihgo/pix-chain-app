import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.black};
`;
