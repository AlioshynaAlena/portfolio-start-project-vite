import styled from "styled-components"
import { theme } from "../../styles/Theme"

export const Menu = () => {
    return (
<StyledMenu>
    <ul>
        <ListItem><a href="">Home
            <Mask><span>Home</span></Mask>
            <Mask><span>Home</span></Mask>
            
            </a>
            </ListItem>
        <ListItem><a href="">Technologies
            <Mask><span>Technologies</span></Mask>
            <Mask><span>Technologies</span></Mask>
            </a>
            </ListItem>
        <ListItem><a href="">Projects
            <Mask><span>Projects</span></Mask>
            <Mask><span>Projects</span></Mask>
            </a>
            </ListItem>
        <ListItem><a href="">About
            <Mask><span>About</span></Mask>
            <Mask><span>About</span></Mask>
            </a>
            </ListItem>
        <ListItem><a href="">Contact
            <Mask><span>Contact</span></Mask>
            <Mask><span>Contact</span></Mask>
            </a>
            </ListItem>
    </ul>
</StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
    }
    a {
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        /* color: ${theme.colors.primaryColorText}; */
        text-align: center;
        color: transparent;
    }

`


const Mask = styled.span`

   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow-y: hidden;
   /* outline: 1px solid red; */
   color: ${theme.colors.primaryColorText};


   & + & {
    top: 50%;
    span {
        transform: translateY(-50%);
        display: inline-block;
    }
   }

`
const ListItem = styled.li`
position: relative;

&::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.secondaryColorText};


    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;


    transform: scale(0);
}
&:hover {
    &::before {
        transform: scale(1);
    }
    ${Mask} {
        transform: skewX(12deg) translateX(5px);
        color: 

        & + ${Mask} {
      transform: skewX(12deg) translateX(-5px);  
    }
    }

    
}   

`
