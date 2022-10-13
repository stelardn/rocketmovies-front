import styled from "styled-components";

export const Container = styled.button`
  background: none;
  text-decoration: none;

  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: left;
`

export const Icon = styled.div`
  display: flex;
  padding: 8px;

`