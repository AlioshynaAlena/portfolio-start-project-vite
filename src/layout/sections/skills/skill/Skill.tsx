import styled from "styled-components";
import { ImageIcon } from "../../../../components/imageIcon/ImageIcon";




type SkillPropsType ={
    title: string;
    width: string;
    height: string;
    src: string;
    alt: string 
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
                {/* <Icon iconId= {props.iconId}/> */}
            <ImageIcon src={props.src} alt={props.alt} width={props.width} height={props.height} />
            <SkillTitle>{props.title}</SkillTitle>
            {/* <SkillText>{props.text}</SkillText> */}
        </StyledSkill>



    )
}

const StyledSkill = styled.div`
width: 15%;
background-color: #fcf8f8;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center; /* Центрирует по горизонтали */
box-shadow: 2px 2px 100px 0px #00000033;
`

const SkillTitle = styled.h3`
  text-align: center;
  margin-top: 10px;
`


