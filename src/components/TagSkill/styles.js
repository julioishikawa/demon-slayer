import styled from "styled-components";

export const Container = styled.span`
  display: flex;

  padding: 5px 16px;
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 9px;

  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.PINK};
`;
