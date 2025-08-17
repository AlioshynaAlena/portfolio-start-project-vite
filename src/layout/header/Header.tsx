import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { IconSocial } from "../../components/iconSocial/IconSocial";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
            <IconSocial />
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    background-color: #3ca53c;
    display: flex;
    justify-content: space-between;
`
