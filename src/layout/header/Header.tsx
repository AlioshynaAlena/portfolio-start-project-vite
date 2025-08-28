import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { IconSocial } from "../../components/iconSocial/IconSocial";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../layout/header/MobileMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <Menu />
          <MobileMenu />
          <IconSocial />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
padding: 10px 0;
background-color: #fff;
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 9999;
`;
