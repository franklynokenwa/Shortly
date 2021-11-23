import React from 'react'
import logo from '../images/logo.svg'
import Button from './Button'
import StlyedNavBar from './styles/NavBar.styled'

const NavBar = () => {
    return (
        <StlyedNavBar>
            <img src={logo} alt="The logo" />
            <nav>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </nav>
            <div>
                <Button 
                name="Login" 
                backgroundColor="white"
                borderRadius="50px"
                color="hsl(0, 0%, 75%)"
                />
                <Button
                name="Sign Up" 
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="50px"
                color="white"
                />
            </div>
            
        </StlyedNavBar>
    )
}

export default NavBar