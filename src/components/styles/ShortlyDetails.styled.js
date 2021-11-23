import styled from 'styled-components'

const StyledDetailsSection = styled.section`
    background-color: rgba(240,241,246,255);
    padding-bottom: 18rem;
    padding-top: 6rem;
    padding-left: 4rem;
    padding-right: 4rem;

    section{
        width: 50rem;
        margin: 5rem auto;
        text-align: center;
    }
    section > h1{
        color: black;
        font-size: 3rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
    }
    section > p{
        width: 38rem;
        margin: 0 auto;
        font-size: 1.3rem;
        font-weight: 500;

    }
    hr{
        background-color: hsl(180, 66%, 45%);
        height: 0.5rem;
        width: 26.7rem;
        border: none;
        position: relative;
        top: 16rem;
    }

`

export default StyledDetailsSection

