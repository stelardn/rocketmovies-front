import styled from "styled-components";
import backgroundImg from '../../assets/bg-404.png';


export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  /* background-color: black; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   > h1 {
    margin-top: -100px;
    font-size: 36px;
    text-shadow: gray 3px 1px 6px;
   }

   > a {
    margin-top: 24px;
   }
`
