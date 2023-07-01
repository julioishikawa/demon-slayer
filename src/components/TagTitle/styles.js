import styled from "styled-components";

export const Container = styled.span`
  font-size: 14px;
  padding: 5px 16px;
  border-radius: 9px;
  margin-right: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;
