import styled from "styled-components";

export const Container = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  
  background-color: ${({ theme }) => theme.COLORS.FONT_BTN};

  padding: 5px 16px;
  border-radius: 8px;

  margin-right: 8px;

  display: flex;

  width: fit-content;
`