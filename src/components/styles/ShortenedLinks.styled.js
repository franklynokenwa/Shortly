import styled from 'styled-components'

const StyledShortenedLink = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-top: 1rem;
    margin-bottom: 8rem;
    width: 56.5rem;
    padding:0 2rem;

    div{
        display: flex;
        justify-content: space-between;
    }
    p{
        padding-right: 2rem;
        color: hsl(255, 11%, 22%);
    }

    button{
        margin: auto 0;
        width: 6rem;
        background-color: hsl(180, 66%, 49%);
        border-radius: 10px ;
        color: white;
        height: 3rem;
        width: 6rem;
        border: none;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 16px;

    &:hover{
        background-color: hsl(180, 66%, 75%);
        transition: 0.5s ease-in-out;
    }
    }

`
export default StyledShortenedLink;