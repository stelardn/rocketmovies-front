import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas: 
    "header"
    "content";

  > header {
    grid-area: header;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};
    padding-left: 123px;
    display: flex;
    align-items: center;
  }

  > form {
    width: 340px;
    justify-self: center;

    > div {
      margin-bottom: 8px;
    }

    > div:nth-child(3), button {
      margin-top: 16px;
    }
  }


`

export const Avatar = styled.div`

  margin: -95px 0 64px;;

  position: relative;
  align-self: center;
  justify-self: center;

  > img {
    height: 186px;
    width: 186px;
    }

  > label { 
    background-color: ${({ theme }) => theme.COLORS.PINK};
    height: 48px;
    width: 48px;
    border-radius: 50%;
    padding: 6px;

    position: absolute;
    right: 10px;
    bottom: 4px;

    display: flex;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_GEN};
      margin: auto;
    }
  }

  > input {
    display: none;
  }
`