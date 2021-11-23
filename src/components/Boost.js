import React from 'react'
import Button from './Button'
import StyledDiv from './styles/Boost.styled'

const Boost = () => {
    return (
        <StyledDiv>
            <h1>Boost your links today</h1>
            <Button
                name="Get Started" 
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="50px"
                color="white"
            />
        </StyledDiv>
    )
}

export default Boost
