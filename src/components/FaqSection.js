import { About } from './styles'
import styled from 'styled-components'
import Toggle from './Toggle'
// detects if our layout changes
import { AnimateSharedLayout } from 'framer-motion'

const FaqSection = () => {
    return(
        <Faq>
            <h2>Additional <span>FAQs</span></h2>
            <AnimateSharedLayout> 
            <Toggle title="Where did I learn to code?"> 
            {/* question to reveal */}
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, pariatur ullam accusamus illo quod mollitia voluptate! Fugiat commodi dolor aspernatur.</p>
            </div>
            </Toggle>

            <Toggle title="How to get in touch with me?"> 
            {/* question to reveal */}
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, pariatur ullam accusamus illo quod mollitia voluptate! Fugiat commodi dolor aspernatur.</p>
            </div>
            </Toggle>

            <Toggle title="Why you need to hire me!"> 
            {/* question to reveal */}
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, pariatur ullam accusamus illo quod mollitia voluptate! Fugiat commodi dolor aspernatur.</p>
            </div>
            </Toggle>

            <Toggle title="How much you want to pay me?"> 
            {/* question to reveal */}
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, pariatur ullam accusamus illo quod mollitia voluptate! Fugiat commodi dolor aspernatur.</p>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}



const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #890e0a;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;

    }
    p{
        padding: 1rem 0rem;
    }
`;

export default FaqSection;