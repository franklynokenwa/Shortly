import React, {useContext,useState} from 'react'
import Button from './Button'
import ApiDataContext from './ApiDataContext';
import { CopyToClipboard } from "react-copy-to-clipboard";
import StyledShortenedLink from './styles/ShortenedLinks.styled'
import db from '../db';
import ClipboardJS from "clipboard"


const ShortenedLink = (props) => {
    const data = useContext(ApiDataContext);
    const [copied, setCopied] = useState(false);
    console.log(data);
    //const {full_short_link, original_link} = data || {};
    const {info} = props || {};
    console.log(info);
    //const {full_short_link, original_link} = info || {}
    const {newerUrls} = props || {} 
    const {full_short_link, original_link} = newerUrls || {}
    console.log(newerUrls);
    console.log('kkkkkk');

    const [Value, setInputValue] = useState('');
    const news = [];

    const [originalLink, setOriginalLink] = useState("");
    const [shortenedLink, setShortenedLink] = useState("");
    const [status, setStatus] = useState("");
    const [copy,setCopy] = useState(false);
    const [value, setValue] = useState("");



    // const createItemFromLocalStorage = () => {
    //     localStorage.setItem('full_shortened_link', full_short_link)
    //     localStorage.setItem('original_link', original_link)
    // }
    
    // const getItemFromLocalStorage = () => {
    //     localStorage.setItem('full_shortened_link', full_short_link)
    //     localStorage.setItem('original_link', original_link)
    // }

    // createItemFromLocalStorage();

    // for (const key in localStorage){
    //     console.log(localStorage.getItem(key));
    // };


    
//    async function storeLinksInDB() {
//         try {
//             const id = await db.links.add({
//                 original_link,
//                 full_short_link
//             });
//             console.log(`links were added successfully ${id}`);
//         } catch (error) {
//             console.log('links were not added successfully');

//         }
//     }
    //full_short_link === undefined ? console.log('not available') : console.log('available');
    
    //full_short_link === undefined ? console.log('not available') : storeLinksInDB();
    //db.delete();


    return (
            <StyledShortenedLink >
                <p>{original_link}</p>
                <div>
                    <p id="foo">{full_short_link}</p>
                    <br />
      <br />
      {/* <input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          setCopied(false);
        }}
      />        */}
      <br />
      <br />

                    <CopyToClipboard text={full_short_link} onCopy={() => setCopied(true)}>
                        <button>Copy</button>
                    </CopyToClipboard>
                    {copy ? <span style={{color: 'red'}}>Copied.</span> : null}
                        
                </div>
                </StyledShortenedLink>
    )
}

export default ShortenedLink
