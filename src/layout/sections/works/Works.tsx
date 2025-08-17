import { styled } from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import project1 from '../../../assets/images/project1.svg'
import project2 from '../../../assets/images/project2.svg'
import project3 from '../../../assets/images/project3.svg'



export const Works = () => {
    return (
        <StyledSectionWorks>
            <SectionTitle>Projects</SectionTitle>
            <StyledText>Things I’ve built so far</StyledText>
            <FlexWrapper wrap={'wrap'} justify="space-around">
                <Work src={project1} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Work src={project2} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Work src={project3} title={'Project Tile goes here'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} text={'Tech stack : HTML , JavaScript, SASS, React'}/>


            </FlexWrapper>


            
        </StyledSectionWorks>
    )
}


const StyledSectionWorks = styled.section`
    min-height: 100vh;
    background-color: #e6ec30;
`
const StyledText = styled.p`
    color: #254a6b;
    text-align: center;
`
