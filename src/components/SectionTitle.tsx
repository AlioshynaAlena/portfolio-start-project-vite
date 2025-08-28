import { styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
${font({ weight: 700, Fmax: 3, Fmin: 2 })}

  /* font-weight: 700; */
  font-style: Bold;
  /* font-size: 3rem; */
  line-height: 26px;
  text-align: center;
  color: ${theme.colors.secondaryColorText}
`;
