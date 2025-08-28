import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import HtmlIcon from "../../../assets/images/html.svg"
import CssIcon from "../../../assets/images/css.svg"
import JsIcon from "../../../assets/images/js.svg"
import ReactIcon from "../../../assets/images/react.svg"
import TsIcon from "../../../assets/images/ts.svg"
import StyledComponentsIcon from "../../../assets/images/sc.svg"
import GitIcon from "../../../assets/images/git.svg"
import GitHubIcon from "../../../assets/images/github.svg"
import SaasIcon from "../../../assets/images/sass.svg"
import VscodeIcon from "../../../assets/images/vscode.svg"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"




export const Skills = () => {
    return (
        <StyledSectionSkills>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
            <StyledText>Technologies I’ve been working with recently</StyledText>
            <FlexWrapper wrap={'wrap'} justify="space-between">
                <Skill src={HtmlIcon} alt={'html'} width={"120"} height={"120"}  title={'HTML 5'} />
                <Skill src={CssIcon} alt={'css'} width={"120"} height={"120"}  title={'CSS'} />
                <Skill src={JsIcon} alt={'js'} width={"120"} height={"120"}  title={'JAVA SCRIPT'} />
                <Skill src={ReactIcon} alt={'react'} width={"120"} height={"120"}  title={'REACT'} />
                <Skill src={TsIcon} alt={'type-script'} width={"120"} height={"120"}  title={'TYPE SCRIPT'} />
                <Skill src={StyledComponentsIcon} alt={'styled-components'} width={"120"} height={"120"} title={'STYLED COMPONENTS'} />
                <Skill src={GitIcon} alt={'git'} width={"120"} height={"120"} title={'GIT'} />
                <Skill src={GitHubIcon} alt={'github'} width={"120"} height={"120"} title={'GITHUB'} />
                <Skill src={SaasIcon} alt={'saas'} width={"120"} height={"120"} title={'SAAS'} />
                <Skill src={VscodeIcon} alt={'vscode'} width={"120"} height={"120"} title={'VSCode'} />
                <Skill src={GitHubIcon} alt={'github'} width={"120"} height={"120"} title={'#'} />
                <Skill src={SaasIcon} alt={'saas'} width={"120"} height={"120"} title={'#'} />

            </FlexWrapper>
            </Container>
            
        </StyledSectionSkills>
 
        
    )
}

const StyledSectionSkills = styled.section`
    background-color: #fff;
`
const StyledText = styled.p`
${font({ weight: 400, Fmax: 2, Fmin: 1.2  })}
    color: ${theme.colors.primaryColorText};
    text-align: center;
    margin: 50px 0;
/* font-weight: 400; */
/* font-size: 2rem; */
line-height: 26px;

`
