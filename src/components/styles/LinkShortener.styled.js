import styled from "styled-components"
import linkContainerBackgroundImage from "../../images/bg-shorten-desktop.svg"
import Button from "../Button"

const StyledLinkSection = styled.section`
    @import
    url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    background: url(${linkContainerBackgroundImage});
    background-color: hsl(257, 27%, 26%);
    width: 60rem;
    height: 8rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    border-radius: 10px;
    margin-left: 4rem;
    margin: 4rem;
    position: relative;
    top: 8rem;
    
    form{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 8rem;
    }
    input{
        width: 45rem;
        height: 3rem;
        border: none;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color:hsl(0, 0%, 15%);
        caret-color: hsl(0, 0%, 75%);

    }
    input:focus{
        outline: 2px solid purple;
    }
    input::placeholder{
        padding-left: 1rem;
    }

    Button{
        width:8rem;   
    }

`

export default StyledLinkSection