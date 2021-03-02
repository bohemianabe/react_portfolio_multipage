// import component
import IntroSection from '../components/IntroSection'
import AboutMe from '../components/AboutMeSection'
import PortfolioSection from '../components/PortfolioSection';
// import FaqSection from '../components/FaqSection'
// animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop'

const AboutMePage = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit"> 
        <AboutMe />
        <IntroSection />
        <PortfolioSection />
        {/* <FaqSection /> */}
        <ScrollTop />
        </motion.div>
    )
}

export default AboutMePage;