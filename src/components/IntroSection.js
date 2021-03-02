import welcomeImage from '../img/frontPage.jpg'
// styles
import styled from 'styled-components';
import Wave from './Wave'
import { useScroll } from './useScroll'
import { fade } from '../animation'
import { motion } from 'framer-motion'
import { personalData } from '../data'
import { useState } from 'react'


const IntroSection=()=>{
    const [element, controls] = useScroll()
    const [data, dataSet] = useState(personalData()[0])
    return(
        <About variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <Title>
                    <Hide>
                    <p> {data.personal2} Link <a href="https://agarrido84.medium.com/life-expectancy-vs-gdp-correlation-among-chile-china-zimbabwe-germany-usa-and-mexico-c946eea712ac" target="_blank">here.</a> </p>
                    </Hide>
                </Title>
            </Description>
            <Image>
                <img src={data.personalImage} alt="pic" />
            </Image>
            <Wave/>
        </About>
    )
};

// styled components
const About = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    @media (max-width: 800px){
        padding: .5rem 1rem;
        flex-direction: column;
    }
`;

const Title = styled.div`
    display: block;
    height: auto;
`;

const Description = styled.div`
    flex: 1rem;
    padding-right: 5rem;
    z-index: 2;
    h2{
        font-weight: lighter;
        margin-bottom: 0rem;
    }
    @media (max-width: 800px){
        padding: .5rem;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    h2{
        font-size: 1.5rem;
    }
    }
`;

const Image = styled.div`
    z-index: 2;
    flex: 1;
    /* overflow: hidden; */
    img{
        width: 100%;
        box-shadow: 12px 12px 12px gray;
    }
`;

const Hide = styled.div`
    overflow: hidden;
    a{
        font-size: 1.4rem;
        font-weight: bold;
        color: #890e0a;
    }
`;
export default IntroSection;