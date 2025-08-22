import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";


type WorkPropsType ={
    src: string;
    title: string;
    description: string;
    text: string;

}


export const Work = (props: WorkPropsType) => {
return (
<StyledWork>
    <ImageWrapper>
        <Image src={props.src} alt=""/>
        <Button>VIEW PROJECT</Button>
    </ImageWrapper>

            <WorkTitle>{props.title}</WorkTitle>
            <WorkDescription>{props.description}</WorkDescription>
            <WorkText>{props.text}</WorkText>
            <WorkLinks>
                <Link href={'#'}>
                 <Icon iconId={'chain'} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                 <LinkDescription>Live Preview</LinkDescription>
                </Link>

                <Link href={'#'}>
                 <Icon iconId={'gh'} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                 <LinkDescription>View Code</LinkDescription>
                </Link>
                
            </WorkLinks>
</StyledWork>


)
}


const StyledWork = styled.div`
width: 100%;
max-width: 375px;
background-color: #FFFFFF;
margin: 5px;
border-radius: 20px;
display: flex;
flex-direction: column;
box-shadow: 2px 2px 100px 0px #00000033;


`
const Image = styled.img`
  border-radius: 20px 20px 0 0; 
  width: 100% ;
  height: 260px;
  object-fit: cover;
`


const WorkTitle = styled.h3`
font-weight: 500;
font-size: 1.75rem;
line-height: 26px;
text-align: center;
margin: 27px 30px 0;


`

const WorkDescription = styled.p`
font-weight: 300;
font-size: 1.125rem;
line-height: 26px;
max-width: 314px;
margin: 17px 30px 12px;


`

const WorkText = styled.p`
    margin: 0 30px 21px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0px;
color: ${theme.colors.secondaryColorText};
`

const Link = styled.a`
display: flex;
column-gap: 10px;
justify-content: center;
padding-bottom: 20px;

font-weight: 400;
line-height: 26px;
text-decoration: underline;
text-decoration-style: solid;
color: #000000;
`
const WorkLinks = styled.div`
    display: flex;
    column-gap: 48px;
    justify-content: center;
`

const LinkDescription = styled.div`
line-height: 162.5%;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
&::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(4px);
        border-radius: 20px 20px 0 0; 

    }
    ${Button} {
            opacity: 1;
        }
    }
    

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;


        }

    }

`

