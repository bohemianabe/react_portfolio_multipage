import {motion} from 'framer-motion'
import {pageAnimation, lineAnim2} from '../animation'
import styled from 'styled-components'
import {faEnvelope, faClipboard} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const MessageSent =()=>{
    return(
        <ContactStyle >
            {/* <div> */}
                <Hide> 
                <Social variants={lineAnim2}> 
                <FontAwesomeIcon icon={faEnvelope} />
                    <motion.h2 >Send Me A Message</motion.h2>
                </Social>
                <ContactSection>
                        <ContactFormSection>
                            <Form>
                                <FormDiv>
                                    <label htmlFor='name'>name *</label>
                                    <input type="text" name='name' id='name' />
                                </FormDiv>

                                <FormDiv>
                                    <label htmlFor="email">email *</label>
                                    <input type="text" name='email' id='email' />
                                </FormDiv>

                                <Message>
                                    <label htmlFor="message">message *</label>
                                    <textarea type="text" name='message' id='message'  />
                                </Message>

                                <ThankYouButton>
                                    {/* <input type="submit" value="Send Message" /> */}
                                    ...Thank you. Your message has been sent!
                                </ThankYouButton>

                            </Form>
                        </ContactFormSection>

                    <ResumeLink>
                        <FontAwesomeIcon icon={faClipboard} />
                        <h3>Resume Link</h3>    
                    </ResumeLink>                
                </ContactSection>
                </Hide>
            {/* </div> */}
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
    button{
        background: red;
        color: #f2eaea;
    }
    @media (max-width: 1300px){
        height: 100%;
    }
`;

const ThankYouButton = styled.div`
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        background: red;
        color: #f2eaea;
        transition: all 0.5s ease;
        margin-left: .3rem;
        @media (max-width: 800px){
        font-size: 1rem;
    }

`;

const Message = styled.div`
    width: 100%;
    margin: .3rem;
    border-radius: .5rem;
    textarea[id='message']{
        width: 100%;
        padding: .2rem;
        font-size: 1.5rem;
        height: 15rem;
        ::-moz-placeholder{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
    @media (max-width: 1300px){
        height: 70%;
        textarea[id="message"]{
            height: 100%;
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



export default MessageSent;