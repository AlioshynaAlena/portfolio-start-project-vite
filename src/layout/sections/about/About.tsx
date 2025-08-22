import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import Frame from '../../../assets/images/frame.svg'
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>About</SectionTitle>
            <FlexWrapper>

                <AboutContainer>
                        <AboutContain>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.

                        </AboutContain>
                    

                    <AboutEducation>Education</AboutEducation>

                    <AboutStudy>
                        <AboutUniversity>
                            <AboutDegree>Bachelor in Electronics & Communication</AboutDegree>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <AboutUniversityName>Bangalore Instutute of Technology</AboutUniversityName>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <AboutStudyTime>Aug 2015 - Dec 2020</AboutStudyTime>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>

                    <AboutStudy>
                        <AboutUniversity>
                            <AboutDegree>Bachelor in Electronics & Communication</AboutDegree>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <AboutUniversityName>Bangalore Instutute of Technology</AboutUniversityName>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <AboutStudyTime>Aug 2015 - Dec 2020</AboutStudyTime>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>

                    <AboutStudy>
                        <AboutUniversity>
                            <AboutDegree>Bachelor in Electronics & Communication</AboutDegree>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <AboutUniversityName>Bangalore Instutute of Technology</AboutUniversityName>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <AboutStudyTime>Aug 2015 - Dec 2020</AboutStudyTime>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>
                </AboutContainer>


                <FotoWrapper>
                    <img src={Frame} alt="pic" />
                </FotoWrapper>
            </FlexWrapper>
            </Container>
        


            
        </StyledAbout>


    )
}

const StyledAbout = styled.section`
background-color: #fff;
`

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;  
`

const AboutStudy = styled.div`
  display: flex;
flex-direction: column;
`
const AboutTime = styled.div`
    display: flex;
`
const AboutUniversity = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`

const AboutPeriod = styled.div`
    display: flex;
    gap: 5px;
`
const AboutFullTime = styled.div`
    border: 1px solid #D7FFE0;
    border-radius: 100px;
    background-color: #D7FFE0;
    color: #018C0F;
font-weight: 600;
font-size: 0.5625rem;
line-height: 24px;
text-align: center;
width: 84px;
height: 24px;

`

const AboutContain = styled.p`
font-weight: 400;
font-size: 1.125rem;
line-height: 26px;
letter-spacing: 0px;
margin: 38px 0;
color: ${theme.colors.primaryColorText};
 
`
const AboutEducation = styled.h3`
font-weight: 700;
font-size: 2.625rem;
line-height: 52px;
letter-spacing: -0.4px;
color: ${theme.colors.secondaryColorText};
margin-bottom: 38px;
  
`


const AboutDegree = styled.div`
font-weight: 400;
font-size: 1.25rem;
line-height: 28px;
letter-spacing: 1px;
color: ${theme.colors.primaryColorText};
`
const AboutUniversityName = styled.div`
font-weight: 500;
font-size: 0.75rem;
line-height: 28px;
letter-spacing: 1px;
color: #A7A7A7;
`
const AboutStudyTime = styled.div`
font-weight: 500;
font-size: 12px;
line-height: 28px;
letter-spacing: 1px;
color: #A7A7A7;
font-size: 0.75rem;

`


const FotoWrapper = styled.div`
    position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.secondaryColorText};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }


`
