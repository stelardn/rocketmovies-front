import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 56px;
  
  border-radius: 10px;
  padding: 16px;

  background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_GEN : theme.COLORS.BACKGROUND_INP};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.FONT_PLCHDR}` : `none`};

  margin-right: 8px;


  > button {
    background: none;
    cursor: pointer;
    display: flex;

    svg {
      height: 24px;
      width: 22px;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-self: center;
    }
  }
  

  > input, p {
    padding-right: 16px;

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
  }

  > input {
    
    width: 135px;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.FONT_INPUT};
    }
  }
`