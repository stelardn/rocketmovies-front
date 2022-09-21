import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  border-radius: 10px;
  padding: 16px;

  background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_GEN : theme.COLORS.BACKGROUND_INP};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.FONT_PLCHDR}` : `none`};

  align-items: center;

  > button svg {
  height: 24px;
  width: 22px;
  /* color: ${({ theme }) => theme.COLORS.PINK}; */
  background-color: none;
}

  > input {
  padding-right: 16px;
  height: 56px;

  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.FONT_INPUT};
  }
}

`