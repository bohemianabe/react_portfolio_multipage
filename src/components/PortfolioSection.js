import skills from '../img/skill-image.jpg'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {useScroll} from './useScroll'
import {fade} from '../animation'
import { personalData } from '../data'
import { useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPointRight} from '@fortawesome/free-regular-svg-icons'

const PortfolioSection=() => {
    const [element, controls] = useScroll()
    const [data, dataSet] = useState(personalData())
    const skillSet = data[0].skills
    return(
            <Desc variants={fade} animate={controls} initial="hidden" ref={element}>
                <Preview>
                    <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}}><span>Quality</span> skills to help build company</motion.h2>
                            <PreviewImg>
                                <img src={skills} alt="webpage" />
                            </PreviewImg>
                </Preview>

                <Cards>

                    {skillSet.map(info => <Card data={info} key={info.id} /> )}

                </Cards>

                <div className="link">
                    <p> Work-History </p> <Link to="/portfolio"> <FontAwesomeIcon icon={faHandPointRight} /> </Link>
                </div>
            </Desc>
    )
}

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 95%;
    width: 75%;
    @media (max-width: 800px){
        height: 75vh;
        width: 100%;
    }
`;

const Desc = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    margin: 5px;
    @media (max-width: 800px){
        flex-direction: column;
    }
    .link{
        height: 5%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        p{
            padding: 0rem;
            margin-right: 2rem;
            font-weight: bold;
            color: black;
            text-decoration: underline;
        }
        a{
                font-size: 2.5rem;
                margin-right: 2rem;
                color: #890e0a;
            }

    }
    
`;

const Preview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 95%;
    h2{
        text-align: center;
    }
    @media(max-width: 2100px){
        h2{
           font-size: 2.5rem;
        }
    }
    @media (max-width: 800px){
        width: 100%;
        height: 20%;
    h2{
        margin-bottom: 1rem;
    }
    }
`;

const PreviewImg = styled.div`
    width: 80%;
    height: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
export default PortfolioSection;