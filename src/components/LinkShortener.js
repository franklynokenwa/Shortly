import React from 'react'
import Button from './Button'
import StyledLinkSection from './styles/LinkShortener.styled'


const LinkShortener = (props) => {
    const {getUrl} = props;
    
    return (
        <StyledLinkSection>
            <div>
                <input type="text" onChange={getUrl} placeholder="Shorten a link here..."/>
                <Button
                name="Shorten it!" 
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="10px"
                />
            </div>
        </StyledLinkSection>
    )
}

export default LinkShortener