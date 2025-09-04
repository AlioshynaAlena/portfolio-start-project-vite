import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import Pic from '../../../assets/images/pic.svg'

export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <SectionTitle>About</SectionTitle>

                    <FlexWrapper  justify={"space-around"} align={"center"} >

                <AboutContainer>

                    <AboutContain>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                   </AboutContain>
                                            
                    <AboutEducation>Education</AboutEducation>

                    <AboutLearning>
                        <AboutStudy>

                        <AboutUniversity>
                            <AboutDegree>Bachelor in Electronics & Communication</AboutDegree>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>

                        <AboutUniversity >
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <AboutUniversityName>Bangalore Instutute of Technology</AboutUniversityName>
                            </AboutPeriod>

                            <AboutLocation>
                                <Icon iconId={'location'} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                                <Location>Belarus</Location>
                            </AboutLocation>

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
                                <AboutLocation>
                                <Icon iconId={'location'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <Location>Belarus</Location>
                            </AboutLocation>
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
                                <AboutLocation>
                                <Icon iconId={'location'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <Location>Belarus</Location>
                            </AboutLocation>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <AboutStudyTime>Aug 2015 - Dec 2020</AboutStudyTime>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>
                    </AboutLearning>

                    

                </AboutContainer>



                <FotoWrapper>
                    <FotoAbout src={Pic} alt="pic" />
                </FotoWrapper>


            </FlexWrapper>
            </Container>  
        </StyledAbout>


    )
}

const StyledAbout = styled.section`
background-color: #fff;
position: relative;
`

const AboutContainer = styled.div`
display: flex;
flex-direction: column;  
`

const AboutStudy = styled.div`
  display: flex;
flex-direction: column;
position: relative;


  &::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #EBEAED;
  }


`
const AboutTime = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const AboutUniversity = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
align-items: center;

&:nth-child(2) {
    @media ${theme.media.mobile} {
        flex-wrap: wrap;
    }
    @media ${theme.media.tablet} {
        flex-wrap: wrap;
    }
    column-gap: 50px;





}
`

const AboutPeriod = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const AboutLocation = styled.div`
    display: flex;
    align-items: center;
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

const AboutContain = styled.div`
${font({ weight: 400, Fmax: 1.125, Fmin: 1  })}
line-height: 26px;
letter-spacing: 0px;
margin: 38px 0;
color: ${theme.colors.primaryColorText};
text-align: left;

@media ${theme.media.mobile}{
    text-align: center;
}
 
`
const AboutEducation = styled.h3`
${font({ weight: 700, Fmax: 2.625, Fmin: 2  })}
line-height: 52px;
letter-spacing: -0.4px;
color: ${theme.colors.secondaryColorText};
margin-bottom: 38px;
text-align: left;
  
`


const AboutDegree = styled.div`
${font({ weight: 400, Fmax: 1.25, Fmin: 0.8  })}
line-height: 28px;
letter-spacing: 1px;
color: ${theme.colors.primaryColorText};
text-align: left;
`
const AboutUniversityName = styled.div`
${font({ weight: 500, Fmax: 0.75, Fmin: 0.75  })}
line-height: 28px;
letter-spacing: 1px;
color: #A7A7A7;
`
const AboutStudyTime = styled.div`
${font({ weight: 500, Fmax: 0.75, Fmin: 0.75  })}
line-height: 28px;
letter-spacing: 1px;
color: #A7A7A7;

`

const Location = styled.div`
  ${font({ weight: 500, Fmax: 0.75, Fmin: 0.75  })}
line-height: 28px;
letter-spacing: 1px;
color: #A7A7A7;  

`


const FotoWrapper = styled.div`
@media screen and (max-width: 940px) {
     display: none;
}

`


const FotoAbout =styled.img`
     object-fit: cover;
  width: 350px;
  height: 430px;

  @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }


`

const AboutLearning = styled.div`
    display: flex;
    flex-direction: column;

`










