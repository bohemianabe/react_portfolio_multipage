import styled from 'styled-components'

const Card = ({ data }) => {
    return(
        <CardStyled>
            <div className="icon">
                <img src={data.picture} alt="webiste-icon"/>
                <h3> {data.skill} </h3>
            </div>
            <p> {data.blurb} </p>            
        </CardStyled>
    ) 
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 25%;
    margin: 0rem 2rem;
    img{
        height: 10rem;
        width: 20rem;
    @media (max-width: 800px){
        height: 8rem;
        width: 12rem;
        font-size: .5rem;
        object-fit: cover;
    }
    }
    @media (max-width: 1200px){
        width: 40%;
        margin: 1rem 1rem;
        font-size: .5rem;
    }
    h3{
        color: #1f2529;
        text-decoration: underline;
        font-family: 'Abril Fatface' sans-serif;
    }
    p{
        color: #1f2529;
        font-family: 'Fira Sans Condensed', sans-serif;
    }
`;

export default Card;