import styled from 'styled-components'

const StyledDetailsItemSection = styled.div`
    width: 19rem;
    background-color: white;
    padding: 2rem;
    margin-top: 4rem;
    border-radius: 10px;

    aside{
        width: 5rem;
        height: 5rem;
        border-radius: 80%;
        background-color: hsl(255, 11%, 22%);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -4rem;
        margin-bottom: -3rem;
    }

    div{
        width: 30rem;
    }

    div > h1{
        font-size: 1.5rem;
        color: black;
    }
    div > p{
        width: 19rem;
        font-size: 1rem;
        margin-top: -0.5rem;

    }

`

export default StyledDetailsItemSection