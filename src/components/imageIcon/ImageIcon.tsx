
type ImagePropsType = {
    src: string;
    width: string;
    height: string;
    // viewBox?: string;
    alt: string    
}


export const ImageIcon = (props: ImagePropsType) => {
    return (
        <img 
            src={props.src} 
            alt={props.alt || ""}  
            width={props.width}    
            height={props.height}
        />
        

    )
}

