import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INP};
  padding: 19px 12px;
  border-radius: 10px;
  
  height: 56px;
  width: 100%;

  display: flex;
  align-items: center;
  
  > input {
    padding-left: 12px;
    background: none;
    font-size: 16px;
    text-align: left;

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
