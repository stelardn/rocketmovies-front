import styled from "styled-components";

export const Container = styled.div`


  > header {
    display: flex;
    justify-content: space-between;

    margin: 50px 123px 40px;

    button {
      width: 200px;
    }
  } 

  > main {
    max-height: 716px;
    overflow-y: scroll;
  }
`
export const MovieNote = styled.div`
  margin: 24px 123px;
  padding: 32px;

  height: 222px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};

    height: 52px;
    overflow: hidden;
  }
`