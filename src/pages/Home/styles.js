import styled from "styled-components";

export const Container = styled.div`


  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 30px 123px 20px;

    button {
      width: 200px;
    }
  } 

  > main {
    max-height: 762px;
    overflow-y: auto;
  }
`