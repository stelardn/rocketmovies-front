import styled from "styled-components";

export const Container = styled.div`


> main {
  padding: 40px 123px;

  h2 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0 40px;
  }

  > form {
    gap: 40px;
    display: flex;
    flex-direction: column;

    > .first-line {
      display: flex;
      gap: 40px;
    } 
  }
  
  > footer {

    margin-top: 40px;

    h3 {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};
      font-weight: 400;
      margin-bottom: 24px;
    }

    .tags {
      display: flex;
      gap: 24px;
      flex-wrap:wrap;

      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
      padding: 16px;
    }

    .buttons {
      margin-top: 40px;
      display: flex;
      gap: 40px;

      > a:first-of-type {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }


 }
`