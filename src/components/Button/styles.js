import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};

  height: 56px;
  border: 0;
  margin-top: 24px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
