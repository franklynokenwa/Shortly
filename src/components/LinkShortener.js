import React,{useState} from 'react'
import Button from './Button'
import axios from 'axios';
import StyledLinkSection from './styles/LinkShortener.styled'
import ShortenedLink from './ShortenedLink';


const LinkShortener = (props) => {
    // const {getUrl, newDataFunction, setUrl, url} = props;

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     console.log('good');
    //     console.log(url);
    //     setUrl('')
        
    // }

    const [url, setUrl] = useState("");
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getUrl = (event) => {
        setUrl(event.target.value)

    }



    const getData = async (event) => {
        event.preventDefault();
      setIsLoading(true)
      await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => {
            setIsLoading(false)
          setData(response.data)
          setUrl('')

        })
    }
    
    return (
        <StyledLinkSection>
            <form onSubmit={getData}>
                <input type="text" onChange={getUrl} value={url} placeholder="Shorten a link here..."/>
                <Button
                name="Shorten it!" 
                backgroundColor="hsl(180, 66%, 49%)"
                borderRadius="10px"
                type="submit"
                />
            </form>

            {}
            {isLoading && 'Loading'}
            {data !== 0 && <ShortenedLink info={data.result}/>}
            {console.log(data.result)}
            {console.log(data.length)}
            
        </StyledLinkSection>
    )
}

export default LinkShortener