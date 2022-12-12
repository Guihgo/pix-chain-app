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

export const Text = styled.p`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  overflow: auto;
`;

export const QRCodeDiv = styled.div`
  width: 100%;
  height: 20rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QRCodeReaderDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
