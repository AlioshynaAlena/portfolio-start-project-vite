import styled from 'styled-components'
import photo from '../../../assets/images/frame.svg'
import { FlexWrapper } from '../../../components/FlexWrapper'


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <div>
                <span>Hi!</span>
                <h2>I am Alena Alioshyna</h2>
                <h1>Frontend Developer</h1>
            </div>

            <StyledPhoto src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledPhoto = styled.img`
    /* width: 350px;
    height: 430px; */
    object-fit: cover;
`
const StyledMain = styled.div`
min-height: 100vh;
background-color: #b5dd65;


`
