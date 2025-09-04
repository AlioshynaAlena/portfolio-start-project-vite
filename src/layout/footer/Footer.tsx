import { styled } from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'}>
                <SocialItem>
                    
                    <SocialLogo>
                        <Logo />
                    </SocialLogo>

                    <SocialInformation>
                        <SocialList>
        <li><SocialLink href="">+37544xxxxxxx</SocialLink></li>
        <li><SocialLink href="">aaaaaaaaaaaaaa@yandex.ru</SocialLink></li>
                        </SocialList>

                        <SocialIconLink>
                <Icon iconId={'gitHubIcon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <Icon iconId={'in'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                        </SocialIconLink>
                        
                    </SocialInformation>                  
                </SocialItem>
            </FlexWrapper>
            <Copyright>© Developed by Alena Alioshyna</Copyright>
            </Container>
            
        </StyledFooter>


        
    )
}

const StyledFooter = styled.footer`
padding: 10px 0;
position: relative;
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
@media ${theme.media.mobile} {
    flex-wrap: wrap;
    justify-content: center;


}

    
`
const SocialIconLink = styled.div`
display: flex; 
column-gap: 20px; 
align-self: center;
`
const Copyright = styled.small`
display: block;
text-align: center;
font-size: 0.6rem;
color: ${theme.colors.primaryColorText};

@media ${theme.media.mobile} {
    margin-top: 20px;
}
    
`
const SocialLogo = styled.div`

`

const SocialInformation = styled.div`
display: flex;
gap: 20px;
@media ${theme.media.mobile} {
    flex-wrap: wrap;
    justify-content: center;

}
`
const SocialLink = styled.a`
${font({ weight: 500, Fmax: 0.8, Fmin: 0.8, family: "DM Sans" })}
line-height: 26px;
text-align: center; 
color: ${theme.colors.primaryColorText};
`
