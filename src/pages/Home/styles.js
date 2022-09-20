import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 180px auto;
  grid-template-areas: 
  "app-header" 
  "content";

  > .top {
    grid-area: app-header;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 20px 123px 20px;

      button {
        width: 200px;
      }
    }
  } 

  > main {
    grid-area: content;
    
    > .list-scroll {
      overflow-y: scroll;
      max-height: 469px;
      margin: 24px 123px;
      
      padding-right: 8px;

    }
    
    > .list-scroll::-webkit-scrollbar {
      width: 8px;
    }
    
    > .list-scroll::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`