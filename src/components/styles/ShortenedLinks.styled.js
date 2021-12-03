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

    Button{
        margin: auto 0;
        width: 6rem;
    }

`
export default StyledShortenedLink;