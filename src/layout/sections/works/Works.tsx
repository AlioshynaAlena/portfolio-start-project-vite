import { styled } from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import project1 from '../../../assets/images/project1.svg'
import project2 from '../../../assets/images/project2.svg'
import project3 from '../../../assets/images/project3.svg'
import project4 from '../../../assets/images/project4.svg'
import project5 from '../../../assets/images/project5.svg'
import project6 from '../../../assets/images/project6.svg'
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"



export const Works = () => {
    return (
        <StyledSectionWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
            <StyledText>Things I’ve built so far</StyledText>
            <FlexWrapper wrap={'wrap'} justify="space-around" align={"flex-start"}>
                <Work src={project1} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                <Work src={project2} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                <Work src={project3} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                <Work src={project4} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                <Work src={project5} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                <Work src={project6} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack: HTML , JavaScript, SASS, React'}/>
                
            </FlexWrapper>
            </Container>
        </StyledSectionWorks>
    )
}


const StyledSectionWorks = styled.section`
`
const StyledText = styled.p`
${font({ weight: 400, Fmax: 2, Fmin: 1.2  })}
line-height: 26px;
text-align: center;
color: ${theme.colors.primaryColorText};
margin: 50px 0;


`

