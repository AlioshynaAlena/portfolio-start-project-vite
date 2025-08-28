import styled from "styled-components";
import photo from "../../../assets/images/frame.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <Preview>
            <SmallText>Hi!</SmallText>
            <Name>
              I am <span>Alena Alioshyna</span>
            </Name>
            <MainTitle>Frontend Developer.</MainTitle>
          </Preview>

          <FotoWrapper>
            <StyledPhoto src={photo} alt="" />
          </FotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledPhoto = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;

  @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
`;
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const SmallText = styled.span`
  font-weight: 700;
  font-size: 3.625rem;
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 3.625rem;
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;
`;

const Name = styled.h2`
  font-weight: 700;
  font-size: 3.625rem;
  color: ${theme.colors.secondaryColorText};
  letter-spacing: -1px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

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

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }
`;
