import styled from 'styled-components'
import Toggle from './Toggle'
// detects if our layout changes
import { AnimateSharedLayout } from 'framer-motion'

const Reference = ({ work }) => {
    return(
        <Ref>
            <AnimateSharedLayout> 
            <Toggle title="Reference"> 
            {/* question to reveal */}
            <div className="answer">
                <p>Name: {work.reference.name}</p>
                <p>Relation: {work.reference.title}</p>
                <p>Contact:{work.reference.contact}</p>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Ref>
    )
}



const Ref = styled.div`
    display: block;
    width: 100%;
    padding: 0rem;
    h3{
        padding-bottom: 2rem;
        font-weight: bold;
        :hover{
            color: #890e0a;
            font-size: 1.5rem;
            transition: .5s ease;
        }
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
        display: inline-flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 2rem 0rem;

    }
    p{
        padding: .2rem 0rem;
        color: #1f2529;
    }
    @media (max-width: 800px){
        .answer {
            flex-wrap: wrap;
            p {
                font-size: 1.2rem;
            }
        }
    }
`;

export default Reference;