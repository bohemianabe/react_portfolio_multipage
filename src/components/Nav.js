import styled from 'styled-components'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion'
import {useLocation} from 'react-router-dom';
import {personalData} from '../data'
import {useState} from 'react'

const Nav = () => {
    const {pathname} = useLocation();
    const [data, dataSet] = useState(personalData())
    return(
        <StyledNav>
            <h1><Link id="logo" href="#">{data[0].name}</Link></h1>
            <ul>
                <li>
                    <Link to="/">About-Me</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === "/" ? '80%' : '0%'}} />
                </li>
                <li>
                    <Link to="/portfolio">Work-History</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === "/portfolio" ? '80%' : '0%'}} />
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === "/contact" ? '80%' : '0%'}} />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    border-bottom: 3px solid #8d7777;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #272323;
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
    }
    ul {
        display: flex;
        list-style: none;
    li{
        padding: 0rem 1rem;
        position: relative;
    }
    }
    @media (max-width: 800px){
        padding: 1rem;
        height: 10vh;
        #logo{
            font-size: 1rem;
        }
        a {
            font-size: 1rem;
        }
        ul {
            li{
            padding: 0rem .5rem;
        }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #e5d334;
    width: 0%;
    position: absolute;
`;

export default Nav;