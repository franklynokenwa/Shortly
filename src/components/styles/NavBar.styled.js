import styled from 'styled-components'

const StlyedNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8rem;
    padding: 0 4rem;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20rem;
        position: relative;
        left: -7rem;
    }

    a{
        text-decoration: none;
    }
    p{
        color:hsl(0, 0%, 75%);
    }
    p:hover{
        color:hsl(0, 0%, 49%);
    }

    img{
        width:20rem;
        height:5rem;
        margin: auto 0;
        cursor: pointer;
    }
    div{
        display:flex;
        width: 15rem;
        justify-content: space-evenly;
        align-items: center;
    }
`

export default StlyedNavBar