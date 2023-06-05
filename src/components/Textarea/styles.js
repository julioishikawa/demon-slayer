import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 204px;

  padding: 18px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
  border-radius: 10px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
