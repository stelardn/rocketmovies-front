import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  
  > div:first-child {
    grid-area: header;
  }
  
  > main {
    margin: 24px 123px 0;
    grid-area: content;

    padding-right: 12px;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 24px;

    > .title {
      display: flex;
      align-items: baseline;
      gap: 19px;

      font-size: 26px;

      > div > img {
        height: 26px;
        width: 20px;
      }
    }

    > .info {
      display: flex;
      gap: 8px;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    > .tags {
      display: flex;
    }

    > .description {
      p {
        text-align: justify;
      }
    }
  }

    > main::-webkit-scrollbar {
      width: 8px;
    }

    > main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
`