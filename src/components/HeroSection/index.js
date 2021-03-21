import React, {useState} from 'react';
import Video from '../../video/video01.mp4';
import {Button} from '../buttonelement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper, 
    ArrowForward,
    ArrowRight
} from './heroelements';

const HeroSection = () => {

    const[hover, setHover] = useState(false)

    const onHover =() => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get in contact today {hover ?<ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
