// import CompanyLogo from '../img/companyLogo.jpg'
// style
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
// animations for when the pages mount
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim, lineAnim} from '../animation'
// components
import Reference from '../components/Reference'


const JobProfile = ({work}) => {
    return(
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {/* Job one ***************************************************** */}
            <Job variants={fade}>
                <WorkHeader> 
                    <motion.h3>{work.job}</motion.h3>
                    <motion.h2 style={{ fontFamily: 'Abril Fatface, sans-serif'}}>{work.company}</motion.h2>
                </WorkHeader>

                <motion.div variants={lineAnim} initial="hidden" className="line"></motion.div>

                <JobDetailContainer>
                    <ImageDiv> 
                        <Hide> 
                            {/* <Link to="/portfolio/the-athlete" > */}
                                <motion.img variants={photoAnim} src={work.companyLogo} initial="show" alt={work.job} />
                            {/* </Link> */}
                        </Hide>
                    </ImageDiv>

                        <Resume>
                            <CompanyDeets>
                                <h3> {work.datesEmployed} </h3>
                                <p> {work.companyDescription} </p>
                            </CompanyDeets>
                                <Responsibilties>
                                    <ul>
                                        {work.responsibilities.map(resp => 
                                           <li>{resp}</li>
                                        )}
                                    </ul>
                                </Responsibilties>
                        </Resume>
                </JobDetailContainer>
                    <RefSection className="RefSection">
                            <Reference work={work} />
                    </RefSection>
            </Job>
        </Work>
    )
};

const Work = styled(motion.div)`
    height: auto;
    /* padding: 5rem 10rem; */
    overflow-y: hidden;
    h2{
        padding: 1rem 0rem;
    }
`;

const ImageDiv = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    margin-right: .5rem;
`;

const Hide = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;


const CompanyDeets = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 35%;
    h3 {
        text-align: right;
        font-size: 1.2rem;
        color: #1f2529;
        text-decoration: underline;
    }
`;

const Resume = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    height: 100%;
`;

const RefSection = styled.div`
    display: block;
    height: 10vh;
    width: 100%;
`;

const Responsibilties = styled.div`
    display: flex;
    margin-left: .5rem;
    flex-direction: column;
    height: 65%;
    ul{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        font-size: 1.5rem;
    li{
        margin: .5rem;
        font-family: 'Fira Sans Condensed', sans-serif;
    }
    }
    @media (max-width: 800px){
        ul{
            font-size: 1.1rem;
        }
    }
`;

const JobDetailContainer = styled.div`
    display: flex;
    width: 100%;
`;

const WorkHeader = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    h3{
        color: #1f2529;
        align-self: center;
        font-size: 1.9rem;
        font-family: 'Source Code Pro', monospace;
        font-weight: lighter;
    }
    @media (max-width: 1300px){
        h2{
            font-size: 1.8rem;
        }
    }
`;


const Job = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        width: 100%;
        background: linear-gradient(to right, #8d7777, #890e0a);
        border-radius: .3rem;
        margin-bottom: 1.5rem;
    }
    img{
        width: 65%;
        height: 50%;
        object-fit: initial;
    }
`;


export default JobProfile;