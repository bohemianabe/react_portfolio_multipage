import styled from 'styled-components'
// useHistory will help me route the url path. it has a location attribute i can use
import {useHistory} from 'react-router-dom'
// data from work
import {WorkState} from '../workState'
import {useState, useEffect} from 'react'
// animations for when the pages mount
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'


const PortfolioDetails = () => {
    const history = useHistory();
    // this variable will help me location the url to match up with what is in the WorkState data
    const url = history.location.pathname;
    // load the info from workState into a useState function to access information
    const [works, setWorks] = useState(WorkState);
    // to extract the specific work from that url
    const [work, setWork] = useState(null)
    // useeffect to run when the component mounts
    useEffect(() => {
        const currentWork = works.filter((stateWork) => stateWork.url === url);
        setWork(currentWork[0])
    }, [works, url])
    return(
        // this fraction is like an async telling react to wait for the info to load before rendering
        <>
        {work && ( 
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <HeadLine>
                <h2>{work.title} </h2>
                <img src={work.mainImg} alt="main"/>
            </HeadLine>
            <Awards>
                {work.awards.map((award) => (
                    <Award title={award.title} description={award.description}
                    key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={work.secondaryImg} alt="secondary"/>
            </ImageDisplay>
        </Details>
        
        )}
        </>
    )
}

const Details = styled(motion.div)`
    color: #413c3c;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #ff7474;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
// Award Component
const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default PortfolioDetails