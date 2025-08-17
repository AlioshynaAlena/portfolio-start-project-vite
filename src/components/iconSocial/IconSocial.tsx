import { styled } from "styled-components"
import { Icon } from "../icon/Icon"

export const IconSocial =() => {
    return (
        <StyledIconSocial href="">
                <Icon iconId={'gitHubIcon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <Icon iconId={'in'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
        </StyledIconSocial>
                
    )
}

const StyledIconSocial = styled.a`
    display: flex;
    column-gap: 20px;
    align-self: center;

`
