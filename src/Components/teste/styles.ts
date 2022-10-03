import styled from "styled-components";

export const Container = styled.div`
  width: 4vh;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled.button`
  width: 7.6rem;
  height: 2rem;
  display: inline-block;
  border-radius: 5px;
  border: none;
`;

export const ReceiveButton = styled(Button)`
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray2};
`;

export const ReceivedButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
`

export const PayButton = styled(Button)`
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray2};
`

export const DisconnectButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
`

export const ConfirmButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
`
export const ContinueButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
`

export const PrivateKey = styled.input`
  width: 12.7rem;
  height: 2rem;
  display: inline-block;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray1};
`;
