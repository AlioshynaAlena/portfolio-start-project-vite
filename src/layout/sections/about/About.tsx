import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import Pic from '../../../assets/images/pic.svg'

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle></SectionTitle>
            <FlexWrapper>

                <AboutContainer>
                    <AboutContain>
                        <h3>About Me</h3>
                        <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    </AboutContain>

                    <h3>Education</h3>

                    <AboutStudy>
                        <AboutUniversity>
                            <div>Bachelor in Electronics & Communication</div>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <div>Bangalore Instutute of Technology</div>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <div>Aug 2015 - Dec 2020</div>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>

                    <AboutStudy>
                        <AboutUniversity>
                            <div>Bachelor in Electronics & Communication</div>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <div>Bangalore Instutute of Technology</div>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <div>Aug 2015 - Dec 2020</div>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>

                    <AboutStudy>
                        <AboutUniversity>
                            <div>Bachelor in Electronics & Communication</div>
                            <AboutFullTime>Full Time</AboutFullTime>
                        </AboutUniversity>
                        <AboutUniversity>
                            <AboutPeriod>
                                <Icon iconId={'build'} width={"20"} height={"20"} viewBox={"0 0 16 12"}/>
                                <div>Bangalore Instutute of Technology</div>
                                </AboutPeriod>
                            <AboutTime>
                                <Icon iconId={'carbon'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                                <div>Aug 2015 - Dec 2020</div>
                            </AboutTime>
                        </AboutUniversity>
                    </AboutStudy>
                </AboutContainer>


                <div>
                    <img src={Pic} alt="pic" />
                </div>
            </FlexWrapper>
        </StyledAbout>


    )
}

const StyledAbout = styled.section`
background-color: #91dce0;
min-height: 80vh;
`

const AboutContainer = styled.div`
display: flex;
flex-direction: column;  
`
const AboutContain = styled.div`
 display: flex;
 flex-direction: column;
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
`
