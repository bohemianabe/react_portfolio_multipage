// animations for when the pages mount
import {motion} from 'framer-motion'
import {pageAnimation, lineAnim2} from '../animation'
import styled from 'styled-components'
import {faEnvelope, faClipboard} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useForm, ValidationError } from '@formspree/react'
import MessageSent from './MessageSent'
import {Link} from 'react-router-dom'
import {faHandPointLeft} from '@fortawesome/free-regular-svg-icons'



const Contact =()=>{
    const [state, handleSubmit] = useForm("contactMe")
    if(state.succeeded){
        return <MessageSent />
    }
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit='exit' >
            {/* <div> */}
                <Hide> 
                <Social variants={lineAnim2}> 
                <FontAwesomeIcon icon={faEnvelope} />
                    <motion.h2 >Send Me A Message</motion.h2>
                </Social>
                <ContactSection>
                        <ContactFormSection>
                            <Form onSubmit={handleSubmit}>
                                <FormDiv>
                                    <label htmlFor='name'>name *</label>
                                    <input type="text" name='name' id='name' />
                                    <ValidationError field="name" prefix="name" errors={state.errors} />
                                </FormDiv>

                                <FormDiv>
                                    <label htmlFor="email">email *</label>
                                    <input type="text" name='email' id='email' />
                                    <ValidationError field="email" prefix="email" errors={state.errors} />
                                </FormDiv>

                                <Message>
                                    <label htmlFor="message">message *</label>
                                    <textarea type="text" name='message' id='message'  />
                                </Message>

                                <button type="submit">
                                    {/* <input type="submit" value="Send Message" /> */}
                                    Send Message
                                    <ValidationError errors={state.errors} />
                                </button>

                            </Form>
                        </ContactFormSection>

                    <ResumeLink>
                        <FontAwesomeIcon icon={faClipboard} />
                        <h3> <a href="https://docs.google.com/document/d/136FRdblVEtdAF6XaPhrmAPRupsLqhNWDQK8RbMaWCrg/edit?usp=sharing" target="_blank" rel="noreferrer">Resume Link</a> </h3>    
                    </ResumeLink>                
                </ContactSection>
                </Hide>
                <div className="link">
                     <Link to="/portfolio"> <FontAwesomeIcon icon={faHandPointLeft} /> </Link> <p> Work-History </p>
                </div>

        </ContactStyle>
    )
};


const ResumeLink = styled.div`
    display: flex;
    padding: .5rem;
    width: 100%;
    justify-content: flex-end;
    svg{
        font-weight: bolder;
        margin-right: .5rem;
    }
`;

const Social = styled.div`
    @media (max-width: 1000px){
        h2{
            font-size: 3rem;
        }
    }
    @media (max-width: 800px){
        h2{
            font-size: 1.8rem;
        }
    }
    display: flex;
    width: auto;
    justify-content: center;
    h2{
        margin: 2rem;
    }
    svg{
        width: 3rem;
        height: 3rem;
        align-self: center;
        font-size: 3rem;
        margin-left: 1rem;
    }
`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: self-start;
    height: auto;
    @media (max-width: 1300px){
        height: 80%;
    }
`;

const ContactFormSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-self: center;
    @media (max-width: 1300px){
        width: 80%;
        height: 100%;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 1300px){
        height: 100%;
    }
`;

const Message = styled.div`
    width: 100%;
    margin: .3rem;
    border-radius: .5rem;
    height: 15rem;
    textarea[id='message']{
        width: 100%;
        padding: .2rem;
        font-size: 1.5rem;
        height: 90%;
        ::-moz-placeholder{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
`;

const FormDiv = styled.div`
    width: 45%;
    margin: .3rem;
    border-radius: .5rem;
    height: 5rem;
    input{
        width: 100%;
        padding: .2rem;
        font-size: 1.2rem;
    }
`;

const ContactStyle = styled(motion.div)`
    padding: 5rem 5rem;
    color: #353535;
    height: 85vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    .link{
        height: 5%;
        width: 100%;
        display: flex;
        justify-content: left;
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

    @media (max-width: 800px){
        height: 80vh;
    }
`;


const Hide = styled.div`
    overflow: hidden;
    box-shadow: 12px 8px gray;
    border: 1px solid #0000005e;
    width: 80%;
    @media (max-width: 1300px){
        display: block;
        height: 60vh;
    }
`;


export default Contact;

