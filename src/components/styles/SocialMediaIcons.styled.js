import styled from 'styled-components'

const StyledSocialMediaIcons = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 14rem;
    margin-top: 1rem;

    img{
        filter: invert(0%) sepia(10%) saturate(26%) hue-rotate(131deg) brightness(105%) contrast(100%);
        width: 2rem;
        height: 2rem;
    }
    img:hover{
        filter: invert(19%) sepia(89%) saturate(1736%) hue-rotate(98deg) brightness(99%) contrast(104%);
    }
`

export default StyledSocialMediaIcons