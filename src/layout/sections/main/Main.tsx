import styled from "styled-components";
import photo from "../../../assets/images/frame.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <Preview>
            <SmallText>Hi!</SmallText>
            <Name>
              I am <span>Alena Alioshyna</span>
            </Name>
            <MainTitle>
              <p>A Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </MainTitle>
          </Preview>

          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <FotoWrapper>
              <StyledPhoto src={photo} alt="" />
            </FotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledPhoto = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;
  margin-right: 20px;

  @media ${theme.media.tablet} {
    margin-top: 65px;
  }

  @media ${theme.media.mobile} {
    width: 314px;
    height: 414px;
    margin-top: 65px;
  }
`;
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const SmallText = styled.span`
  ${font({ weight: 700, Fmax: 3.625, Fmin: 2.25 })}

  /* font-weight: 700;
  font-size: 3.625rem; */
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;
`;

const MainTitle = styled.h1`
  ${font({ weight: 700, Fmax: 3.625, Fmin: 2.25 })};
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;

  p {
    display: none;
  }
`;

const Name = styled.h2`
  ${font({ weight: 700, Fmax: 3.625, Fmin: 2.25 })}
  /* font-weight: 700;
  font-size: 3.625rem; */
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: #fff;

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;
const Preview = styled.div`
  text-align: left;
`;

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

    @media ${theme.media.tablet} {
      margin-top: 65px;
    }

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      margin-top: 65px;
      top: -17px;
      left: 20px;
    }
  }
`;
