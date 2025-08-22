import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify="space-around">
                <StyledForm>
                    <StyledField placeholder={'Name'}></StyledField>
                    <StyledField placeholder={'Subject'}></StyledField>
                    <StyledField as={'textarea'} placeholder={'Message'}></StyledField>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
{/* выносить нужно */}
          </FlexWrapper>
            </Container>
            
        </StyledContacts>



    )
}

const StyledContacts = styled.section`
`
const StyledForm = styled.form`
max-width: 540px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
margin: 0 auto;
font-family: 'Poppins', sans-serif;
margin-top:50px;
margin-bottom:50px;

textarea {
    resize: none;
    height: 155px;
}
`
const StyledField = styled.input`
width: 100%;
border: 1px solid ${theme.colors.secondaryColorText};
padding: 7px 15px;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.secondaryColorText};


    &::placeholder {
    color: ${theme.colors.secondaryColorText};
    font-size: 0.625rem;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.secondaryColorText};

    }
`
