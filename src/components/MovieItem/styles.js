import styled from "styled-components";

export const Container = styled.div`
  margin: 24px 123px;
  padding: 32px;
  height: 222px;
  border-radius: 16px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    margin: 15px 0 30px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};

    text-align: justify;

    height: 38px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    text-overflow: ellipsis;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
  }

`