import styled from "styled-components";
import { ImageIcon } from "../../../../components/imageIcon/ImageIcon";
import { theme } from "../../../../styles/Theme";

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
/* margin-bottom: 20px; */
display: flex;
flex-direction: column;
align-items: center; /* Центрирует по горизонтали */
/* box-shadow: 2px 2px 100px 0px #0000003d; */
`

const SkillTitle = styled.h3`

  margin-top: 20px;
font-weight: 400;
line-height: 26px;
text-align: center;
color: ${theme.colors.primaryColorText};


`


