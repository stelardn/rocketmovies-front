import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};

  width: 100%;
  height: 56px;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.FONT_BTN};

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  > svg {
    padding-right: 8px;
    height: 20px;
    width: 20px;
  }
`