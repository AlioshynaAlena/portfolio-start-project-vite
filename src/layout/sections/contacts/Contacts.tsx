import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify="space-around">
                <StyledForm>
                    <StyledField placeholder={'Name'}></StyledField>
                    <StyledField placeholder={'Subject'}></StyledField>
                    <StyledField as={'textarea'} placeholder={'Message'}></StyledField>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
{/* выносить нужно */}
          </FlexWrapper>
        </StyledContacts>



    )
}

const StyledContacts = styled.section`
background-color: pink;
min-height: 50vh;
    
`
const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`
const StyledField = styled.input`
    
`
