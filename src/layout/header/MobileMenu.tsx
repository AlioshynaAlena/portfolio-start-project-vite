import { styled } from "styled-components"
import { theme } from "../../styles/Theme"
import { css } from "styled-components"
import { useState } from "react"
import { Link } from "react-scroll"

export const MobileMenu = () => {

const [menuIsOpen, setMenuIsOpen] = useState(false)
const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
}

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>


            <MobileMenuPopup isOpen={menuIsOpen} onClick = {()=>{setMenuIsOpen(false)}}>
                <ul>
        <ListItem><NavLink to="home">Home
            <Mask><span>Home</span></Mask>
            <Mask><span>Home</span></Mask>
            
            </NavLink>
            </ListItem>
        <ListItem><NavLink to="technologies">Technologies
            <Mask><span>Technologies</span></Mask>
            <Mask><span>Technologies</span></Mask>
            </NavLink>
            </ListItem>
        <ListItem><NavLink to="projects">Projects
            <Mask><span>Projects</span></Mask>
            <Mask><span>Projects</span></Mask>
            </NavLink>
            </ListItem>
        <ListItem><NavLink to="about">About
            <Mask><span>About</span></Mask>
            <Mask><span>About</span></Mask>
            </NavLink>
            </ListItem>
        <ListItem><NavLink to="contact">Contact
            <Mask><span>Contact</span></Mask>
            <Mask><span>Contact</span></Mask>
            </NavLink>
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
/* opacity: .9; */
display: flex;
justify-content: center;
align-items: center;
transform: translateY(-100%);
transition: .6s ease-in-out;

${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateY(0);

`},

    ul {
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;

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
    
            & + ${Mask} {
          transform: skewX(12deg) translateX(-5px);  
        }
        }
    
        
    }
    
    
    `

    const NavLink = styled(Link)`
font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        /* color: ${theme.colors.primaryColorText}; */
        text-align: center;
        color: transparent;
    
    `
      
      