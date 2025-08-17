import { styled } from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Logo } from "../../components/logo/Logo"

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} justify={'center'}>
                <SocialItem>
                    
                    <SocialLogo>
                        <Logo />
                    </SocialLogo>

                    <SocialInformation>
                        <SocialList>
        <li><a href="">+37544</a></li>
        <li><a href="">@yandex.ru</a></li>
                        </SocialList>

                        <SocialIconLink>
                <Icon iconId={'gitHubIcon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <Icon iconId={'in'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                        </SocialIconLink>
                        
                    </SocialInformation>                  
                </SocialItem>
            </FlexWrapper>
            <Copyright>© Developed by Alena Alioshyna</Copyright>
        </StyledFooter>


        
    )
}

const StyledFooter = styled.footer`
background-color: #b0b0e8;
/* min-height: 10vh; */
padding: 0 5px 0;
`

const SocialList = styled.ul`
display: flex;
column-gap: 30px;
align-self: center;

        
`
const SocialItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
    
`
const SocialIconLink = styled.div`
display: flex; 
column-gap: 20px; 
align-self: center;
`
const Copyright = styled.small`
display: block;
text-align: center;
    
`
const SocialLogo = styled.div`

`

const SocialInformation = styled.div`
display: flex;
gap: 20px;
`
