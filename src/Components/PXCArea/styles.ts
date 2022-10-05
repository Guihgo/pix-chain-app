import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  gap: 0.3rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
`;

export const TitleH3 = styled.p`
  padding-left: 1rem;
  margin: 0;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.white};
`;

export const TextYellow = styled.p`
  padding-left: 1rem;
  margin: 0;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.yellow};
`;

export const WhiteBar = styled.div`
  width: 5.3rem;
  height: 0.3125rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const YellowBar = styled.div`
  width: 7rem;
  height: 0.3125rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
