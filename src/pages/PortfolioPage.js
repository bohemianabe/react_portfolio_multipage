// style
import styled from 'styled-components'
// animations for when the pages mount
import {motion} from 'framer-motion'
import {pageAnimation, slider, sliderContainer} from '../animation'
// components
import JobProfile from '../components/JobProfile'
// useState 
import {useState} from 'react'
// import data
import { workData } from '../data'
// scroll top
import ScrollTop from '../components/ScrollTop'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPointRight, faHandPointLeft} from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'




const PortfolioPage =()=>{
    const [workInfo, setWorkInfo] = useState(workData())
    return(
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {/* frames */}
            <motion.div variants={sliderContainer}> 
            <Frame1 variants={slider} ></Frame1>
            <Frame2 variants={slider} ></Frame2>
            <Frame3 variants={slider} ></Frame3>
            <Frame4 variants={slider} ></Frame4>
            </motion.div>
            {workInfo.map(work => <JobProfile work={work} key={work.id} id={work.id} />)}
            <div className="link">
                <div className="back">
                 <Link to="/"> <FontAwesomeIcon icon={faHandPointLeft} /> </Link> <p> About-Me </p>
                </div>

                <div className="next">
                <p> Contact </p> <Link to="/contact"> <FontAwesomeIcon icon={faHandPointRight} /> </Link>
                </div>
            </div>
            <ScrollTop />
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;
    overflow-y: hidden;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 800px){
        padding: 5rem 1.5rem;
    }
    @media (max-width: 1200px){
        padding: 5rem 2rem;
    }
    .link{
        display: flex;
        height: 5%;
        width: 100%;
        justify-content: space-between;
        .back{
            display:flex;
            width: auto;
            align-items: center;
            p{
            padding: 0rem;
            margin-left: 2rem;
            font-weight: bold;
            color: black;
            text-decoration: underline;
        }
        a{
                font-size: 2.5rem;
                margin-left: 2rem;
                color: #890e0a;
            }

        }
        .next{
            display:flex;
            width: auto;
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
    }
`;

// frame animation

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 5%;
    width: 100%;
    height: 100vh;
    background: #890e0a;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #d1eefd;
`;

const Frame3 = styled(Frame1)`
    background: #2387cf;
`;

const Frame4 = styled(Frame1)`
    background: #e5d334;
`;



export default PortfolioPage;