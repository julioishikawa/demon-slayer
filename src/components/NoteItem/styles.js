import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 56px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;

  padding-right: 16px;

  > button {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div,
  input {
    height: 56px;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;
