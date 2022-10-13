import styled from "styled-components";
import backgroundImg from '../../assets/bg-404.png';


export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   > h1 {
    margin-top: -100px;
    font-size: 36px;
   }

   > h3 {
    margin-top: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_GRAY};
    font-size: 20px;
   }

   > button {
    margin-top: 40px;
   }
`
