import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


type WorkPropsType ={
    src: string;
    title: string;
    description: string;
    text: string;

}


export const Work = (props: WorkPropsType) => {
return (
<StyledWork>
            <Image src={props.src} alt=""/>
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
    text-align: center;
    color: #42446E;
`

const WorkDescription = styled.p`
    text-align: center;
    color: #666666;
`

const WorkText = styled.p`
    text-align: center;
`
const Link = styled.a`
display: flex;
column-gap: 10px;
justify-content: center;
`
const WorkLinks = styled.div`
    display: flex;
    column-gap: 40px;
    justify-content: center;
`

const LinkDescription = styled.div`
line-height: 162.5%;
`



