import React from 'react';
import { Button } from '../buttonelements';
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, 
    ImgWrap,
    Img
} from './infoelements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    desciption, 
    buttonLabel,
    img,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{desciption}</Subtitle>
                        <BtnWrap>
                            <Button to='home' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                             </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
};

export default InfoSection;
