import styled from 'styled-components'

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 0 4rem;

    div{
        margin-top: 1rem;
    }
    h1{
        font-size: 3.8rem;
        font: 700;
        width: 35rem;
        color:hsl(255, 11%, 22%)
    }
    p{
        width: 30rem;
        margin-top: -2rem;
        font-size: 1.2rem;
    }

    img{
        width: 40rem;
    }
    Button{
        width: 10rem;
    }


`

export default StyledHeroSection