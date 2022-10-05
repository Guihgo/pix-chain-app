import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  padding-left: 0.5rem;
  box-sizing: border-box;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray1};
`;
