import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};

  width: 100%;
  height: 56px;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.FONT_BTN};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > svg {
    padding-right: 8px;
    height: 20px;
    width: 20px;
  }
`