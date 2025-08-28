import { styled } from "styled-components"
import { theme } from "../../styles/Theme"
import { css } from "styled-components"

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>


            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>

</StyledMobileMenu>

    )

}

const StyledMobileMenu = styled.nav`
display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }

`


const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryColorText};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
`}

        &::before {
        content: '';
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryColorText};
        position: absolute;
        transform: translateY(-10px);


        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
`}
        }

        &::after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.secondaryColorText};
        position: absolute;
        transform: translateY(10px);


        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
       `}
        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 999999;
background-color: #f2eef8;

display: none;

${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
`},

    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
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
    
        
    }`
      