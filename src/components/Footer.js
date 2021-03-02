import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faInstagram, faMedium} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <MainDiv>
        
        <StyledNav>
            <h1>&copy; Abel Garrido Designs</h1>
            <ul>
                <li>
                    <a href="https://www.instagram.com/hill_east_dispatch/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/abel-garrido-44ab231b1/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a>
                </li>
                <li>
                    <a href="https://agarrido84.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMedium} /> </a>
                </li>
            </ul>
        </StyledNav>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #272323;
    color: #c9c1c1;
    @media (max-width: 500px){
        margin-top: 2rem;
    }
`;

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    border-bottom: 3px solid #bbb9b9;
    width: 100%;
    #logo{
        font-size: 2rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    a {
        color: #c9c1c1;
        text-decoration: none;
        font-size: bold;
        font-size: 1.5rem;
        font-weight: bold;
        :hover{
            color: #e5d334;
        }
    }
    ul {
        display: flex;
        list-style: none;
    li{
        padding: 0rem 1rem;
        position: relative;
    }
    h1{
        color: #c9c1c1;
    }
    }
    @media (max-width: 800px){
        padding: 1rem 1rem;
    }
`;


export default Footer;