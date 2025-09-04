import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from "react"

export const Contacts = () => {

const form = useRef<ElementRef<'form'>>(null);


  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return

    emailjs
      .sendForm('service_qsjs6kg', 'template_p6l7ci8', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


    return (
        <StyledContacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify="space-around">
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <StyledField required placeholder={'Name'} name={'user_name'}></StyledField>
                    <StyledField required placeholder={'Email'} name={'email'}></StyledField>
                    <StyledField required placeholder={'Subject'} name={'subject'}></StyledField>
                    <StyledField required as={'textarea'} placeholder={'message'} name={'message'}></StyledField>
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
