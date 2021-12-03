import React, {useContext} from 'react'
import Button from './Button'
import ApiDataContext from './ApiDataContext';
import StyledShortenedLink from './styles/ShortenedLinks.styled'

const ShortenedLink = (props) => {
    const data = useContext(ApiDataContext);
    console.log(data);
    const {full_short_link, original_link} = data || {};


    return (
        <StyledShortenedLink>
            <p>{original_link}</p>
            <div>
                <p>{full_short_link}</p>
                <Button name="Copy" backgroundColor="hsl(180, 66%, 49%)" borderRadius="10px" color="white"/>
            </div>
        </StyledShortenedLink>
    )
}

export default ShortenedLink
