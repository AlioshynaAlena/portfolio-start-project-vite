import { styled } from 'styled-components';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import { theme } from '../../styles/Theme';

type IconPropsType = {
iconId: string;
width?: string;
height?: string;
viewBox?: string;

}



export const Icon = (props: IconPropsType) => {
    return (
        <IconSvg width={props.width ||"50" } height={props.height ||"50" } viewBox= {props.viewBox || "0 0 50 50"}fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </IconSvg>
    )
}

const IconSvg = styled.svg`
transition: ${theme.animations.transition};
    &:hover {
    transform: scale(1.3)
}
`

