import React, {useContext} from 'react'
import Button from './Button'
import ApiDataContext from './ApiDataContext';

const ShortenedLink = (props) => {
    const data = useContext(ApiDataContext);
    console.log(data);
    const {full_short_link, original_link} = data;


    return (
        <div style={{backgroundColor:'red'}}>
            <p>{full_short_link}</p>
            <p>{original_link}</p>
            <p>good</p>
            <div>
                <Button
                name="Copy"
                />
            </div>
        </div>
    )
}

export default ShortenedLink
