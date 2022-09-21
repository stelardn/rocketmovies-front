import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INP};
  padding: 19px 12px;
  border-radius: 10px;
  
  width: 100%;
  min-width: 150px;
  
  display: flex;
  align-items: center;
  
  > textarea {
    height: 274px;
    padding-left: 12px;
    background: none;
    font-size: 16px;
    text-align: left;

    resize: none;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};
    }
  }
`

export const Icon = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`
