import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};

  display: flex; 
  align-items: center;

  justify-content: stretch;
  gap: 64px;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
  }
`
export const Avatar = styled.div`
  min-width: 198px;
  display: flex;
  align-items: center;
  gap: 9px;

  justify-content: flex-end;

  
  > p {
    display: flex;
    flex-direction: column;

    > strong a {
      font-weight: 700;
      text-align: right;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
    }

    > button {
      color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};
      background: none;
      border: none;
      text-align: right;
      cursor: pointer;

      &:hover {
        filter: brightness(1.25);
      }
    }
  }

  > a img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`