import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};

  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 64px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Avatar = styled.div`
  min-width: 198px;
  display: flex;
  align-items: center;
  gap: 9px;
  
  > p {
    display: flex;
    flex-direction: column;

    > strong {
      font-weight: 700;
      text-align: right;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.FONT_PLCHDR};
      text-align: right;
    }
  }

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`