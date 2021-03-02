import {createGlobalStyle} from 'styled-components'

// color palette: 
// blackish - #1f2529 
// yellow - #e5d334 
// blue - #2387cf 
// white - #d1eefd 
// red - #890e0a 


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        /* background: linear-gradient(145deg, #fbfcfc, #d1eefd);  */
        background: white;
        color: #1f2529;
        overflow-x: hidden;

    }

    html {
        @media (max-width: 1000px){
            font-size: 90%;
        }
        @media (max-width: 1300px){
            font-size: 90%;
        }
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #262424;
        color: #f2eaea;
        transition: all 0.5s ease;
        margin-left: .3rem;
        &:hover{
            background-color: #f2eaea;
            color: #262424;
        }
        @media (max-width: 800px){
        font-size: 1rem;
    }

    }
    h2{
            font-weight: lighter;
            font-size: 3.5rem;
        }
        h3{
            color: #4c5ad8;
        }
        p {
            padding: 3rem 0rem;
            /* color: #4c5ad8; */
            font-size: 1.4rem;
            font-family: 'Crimson Text', serif;
        }
        h4{
            font-weight: bold;
        }
        span{
            font-weight: bold;
            color: #8f8422;
        }
        a{
            font-size: 1.1rem;
        }

`;

export default GlobalStyle;