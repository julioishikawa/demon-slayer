import styled from "styled-components";

export const Container = styled.span`
  font-size: 16px;
  padding: 4px 0 4px 0px;
  border-radius: 9px;

  :nth-child(-n + 10):before {
    content: ", ";
  }
  
  :nth-child(1):before {
    content: " ";
  }

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
