import { styled } from "styled-components"
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

export const IconSocial =() => {
    return (
 
        <IconWrapper>
            <li><StyledIconSocial href=""><Icon iconId={'gitHubIcon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></StyledIconSocial></li>
            <li><StyledIconSocial href=""><Icon iconId={'in'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></StyledIconSocial></li>
        </IconWrapper>

                
    )
}



const IconWrapper = styled.ul`
    display: flex;
    column-gap: 20px;
    align-self: center;

`


const StyledIconSocial = styled.a`

    ${font({ weight: 500, Fmax: 0.8, Fmin: 0.8, family: "DM Sans" })}
    line-height: 26px;
    text-align: center; 
    color: ${theme.colors.primaryColorText};
    transition: ${theme.animations.transition};

    @media ${theme.media.tablet} {
        display: none;
    }

`
