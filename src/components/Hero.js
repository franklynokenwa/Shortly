import React from 'react'
import Button from './Button'
import IllustrationImage from '../images/illustration-working.svg'
import StyledHeroSection from './styles/Hero.styled'

const Hero = () => {
    return (
        <StyledHeroSection>
            <div>
                <h1>MORE THAN JUST SHORTER LINKS</h1>
                <p>Build your Brand's recognition and get detailed insights on how your links are performing </p>
                <Button name="Get Started"
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="50px"
                color="white"
                />
            </div>
            <img src={IllustrationImage} alt="An illustration of someone working"/>
        </StyledHeroSection>
    )
}

export default Hero
