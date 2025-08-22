import { styled } from "styled-components";

type ImagePropsType = {
    src: string;
    width: string;
    height: string;
    // viewBox?: string;
    alt: string    
}


export const ImageIcon = (props: ImagePropsType) => {
    return (
        <StyledImageIcon 
            src={props.src} 
            alt={props.alt || ""}  
            width={props.width}    
            height={props.height}
        />
        

    )
}

const StyledImageIcon = styled.img`
   margin-top: 5px ;

`
