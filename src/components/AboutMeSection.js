import styled from 'styled-components';
import Video from '../img/KentIslandBikePath.mp4'
import backGroundPhoto from '../img/frontPageImage.jpg'
// animation
import {motion} from 'framer-motion'
import {titleAnim, videoAnim, fade} from '../animation'
import {useScroll} from './useScroll'
import { personalData } from '../data'
import { useState } from 'react'

const AboutMe = () => {
    const [element, controls] = useScroll();
    const [data, dataSet] = useState(personalData()[0])
    return(
        <AboutDiv variants={fade} animate={controls} initial="hidden" ref={element}>
            <Header variants={titleAnim}>
            <motion.h2 variants={titleAnim}> {data.name} </motion.h2>
            </Header>
            <DESC variants={titleAnim}>
                <motion.p variants={titleAnim}> {data.personal} </motion.p>
            </DESC>
            <StyledVideo> 
            <img src={backGroundPhoto} alt="photo" />
            </StyledVideo>
        </AboutDiv>
    )
}

const Header = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: auto;
    background: white;
    padding: .5rem;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-bottom: 1rem;
    opacity: .8;
    border-radius: .3rem;
    padding: 1rem;
    /* box-shadow: 4px 4px #75a5fd; */
    h2 {
        text-align: center;
    }
`;

const DESC = styled(motion.div)`
    display: flex;
    width: auto;
    background: white;
    height: 25%;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 2px black;
    text-align: center;
    line-height: 2.2rem;
    z-index: 1;
    opacity: .8;
    border-radius: .3rem;
    /* box-shadow: 4px 4px #75a5fd; */
    max-width: 75%;
    p{
        color: black;
        padding: 1rem 4rem;
    }
    @media (max-width: 800px){
        width: 80%;
    }
`;


const AboutDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 95vh;
    position: relative;
    font-family: 'Lobster', cursive;
    overflow: hidden;
    @media (max-width: 800px){
        height: 90vh;
    }
`;

const StyledVideo = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    img{
        width: 100%;
        height: 93vh;
        object-fit: fill;
    }
`;

export default AboutMe;