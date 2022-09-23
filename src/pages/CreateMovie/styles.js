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

    p {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};
    }

    .tags {
      display: flex;
      gap: 24px;
      flex-wrap:wrap;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
      padding: 16px;
    }
  }


 }
`