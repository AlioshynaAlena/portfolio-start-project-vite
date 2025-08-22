import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button =  styled.button`
    color: ${theme.colors.secondaryColorText};
    font-family: 'Poppins', sans-serif;
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 50%;
      height: 5px;
      background-color: #fff;

      position: absolute;
      bottom: 0;
      z-index: -1;
    }

`
