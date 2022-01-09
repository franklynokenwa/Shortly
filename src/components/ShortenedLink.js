import React, {useContext,useState} from 'react'
import Button from './Button'
import ApiDataContext from './ApiDataContext';
import { CopyToClipboard } from "react-copy-to-clipboard";
import StyledShortenedLink from './styles/ShortenedLinks.styled'


const ShortenedLink = (props) => {
    const data = useContext(ApiDataContext);
    const [copied, setCopied] = useState(false);
    console.log(data);
    //const {full_short_link, original_link} = data || {};
    const {info} = props || {};
    console.log(info);
    const {full_short_link, original_link} = info || {}
    const [inputValue, setInputValue] = useState('');
    const news = []
    


    return (
            <StyledShortenedLink >
                <p>{original_link}</p>
                <div>
                    <p >{full_short_link}</p>
                        <Button 
                            name="Copy" 
                            backgroundColor="hsl(180, 66%, 49%)" 
                            borderRadius="10px" color="white" 
                        />
                </div>
            </StyledShortenedLink>
    )
}

export default ShortenedLink
