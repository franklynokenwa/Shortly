import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: hsl(260, 8%, 14%);
    color: red;
    display: flex;
    justify-content: space-around;
    padding: 4rem 0;
    

    img{
        width:7rem;
        height:4rem;
        filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(319deg) brightness(103%) contrast(101%)
    }

    h1{
        font-size: 1.4rem;
        color: white;
    }
    p{
        font-size: 1rem;
        color: hsl(0, 0%, 75%);
    }
    p:hover{
        color: hsl(180, 66%, 49%);
    }
    a{
        text-decoration: none;
    }

`
export default StyledFooter