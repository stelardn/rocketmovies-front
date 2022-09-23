import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: space-evenly;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 340px;
  justify-self: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.FONT_GRAY};
    font-size: 14px;
  }

  > h3 {
    font-size: 24px;
    margin: 48px 0;
  }

  > div:last-of-type {
    margin: 8px 0 24px;
  }

  > a:last-child {
    margin-top: 42px;
    align-self: center;
  }
`

export const Background = styled.div`
  max-width: 823px;
  height: 100%;
  flex: 1;
  background-size: cover;
  background: url(${backgroundImg}) no-repeat center right;
`