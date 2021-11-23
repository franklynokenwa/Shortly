import React from 'react'
import logo from '../images/logo.svg'
import facebookIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import twitterIcon from '../images/icon-twitter.svg';
import StyledFooter from './styles/Footer.styled';
import StyledSocialMediaIcons from './styles/SocialMediaIcons.styled'

const Footer = () => {
    return (
        <StyledFooter>
            <img src={logo} alt="The logo" />
            <div>
                <h1>Features</h1>
                <div>
                    <a href="/">
                        <p>Link Shortening</p>
                    </a>
                    <a href="/">
                        <p>Branded Links</p>
                    </a>
                    <a href="/">
                        <p>Analytics</p>
                    </a>
                    
                </div>
            </div>
            <div>
                <h1>Resources</h1>
                <div>
                    <a href="/">
                        <p>Blog</p>
                    </a>
                    <a href="/">
                        <p>Developers</p>
                    </a>
                    <a href="/">
                        <p>Support</p>
                    </a>
                </div>
            </div>
            <div>
                <h1>Company</h1>
                <div>
                    <a href="/">
                        <p>About</p>
                    </a>
                    <a href="/">
                        <p>Our Team</p>
                    </a>
                    <a href="/">
                        <p>Careers</p>
                    </a>
                    <a href="/">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
            <StyledSocialMediaIcons>
                <img src={facebookIcon} alt="facebook icon"/>
                <img src={twitterIcon} alt="facebook icon"/>
                <img src={pinterestIcon} alt="facebook icon"/>
                <img src={instagramIcon} alt="facebook icon"/>
            </StyledSocialMediaIcons>
        </StyledFooter>
    )
}

export default Footer
