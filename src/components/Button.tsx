import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;


  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    
    }
  }

  &::before {
    content: "";
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: #f2eef8;

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    transition: ${theme.animations.transition};
  }
`;
