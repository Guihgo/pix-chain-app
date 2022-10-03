import styled from "styled-components";

export const Container = styled.div`
  width: 24.3rem;
  height: 52.7rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const TitleH2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.yellow};
`;

export const TitleH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextYellow = styled(Text)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Header = styled.section`
  width: 24.3rem;
  height: 4.8rem;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const PXCArea = styled.section`
  width: 21.6rem;
  height: 4.8rem;
  margin: auto;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.dark};
`

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
