import './App.css';
/*
import {useSelector, useDispatch} from'react-redux';
import {Increment} from './Actions/actions';
import {Decrement} from './Actions/actions';*/

import React,{useState, useEffect, useReducer} from 'react';
import NavBar from './components/NavBar';
import GlobalStyles from './components/styles/Global';
import Hero from './components/Hero';
import LinkShortener from './components/LinkShortener';
import ShortlyDetails from './components/ShortlyDetails';
import Boost from './components/Boost';
import Footer from './components/Footer';
import ShortenedLink from './components/ShortenedLink';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import ApiDataContext from './components/ApiDataContext';


const App = () => {
    const [fetchedData, setFetchedData] = useState("");
    const [url, setUrl] = useState("");
    //const [fullShortLink, setFullShortLink] = useState("");
    //const [originalLink, setOriginalLink] = useState("");
    const initialState = { apiData: ""};

  const ACTIONS = {
    GET_DATA_FROM_API: "get-data-from-api",
    
  }
    const [state, dispatch] = useReducer(reducer, initialState)
    const {apiData} = state;


    function reducer(state, action) {
      switch(action.type){
        case ACTIONS.GET_DATA_FROM_API :
          return{
            ...state,
            apiData: action.data
          }
        default:
          return state;
      }
    }

    function getUrl(event){        
        setUrl(event.target.value) 
        console.log(event.target.value)           
    }


    useEffect(() => {
      const getData = async () => {
       await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => {
          dispatch({type: ACTIONS.GET_DATA_FROM_API, data: response.data});
        })
       } 
       
       getData();
    }, [ACTIONS.GET_DATA_FROM_API,url,]);
    console.log(apiData.result);
  
  return (
    <ApiDataContext.Provider value={apiData.result}>
      <Helmet>
        <title>Wonderful App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyles/>
      <NavBar/>
      <Hero/>
      <LinkShortener
      getUrl={getUrl}
      />
      <ShortenedLink
      />
      <ShortlyDetails/>
      <Boost/>
      <Footer/>
    </ApiDataContext.Provider>
  )
}

export default App


/*
function App() {

  const counterValue = useSelector((state) => state.counterReducer);
  const isLoggedInValue = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();


  return(
    <div className="App">
      <h1>Counter {counterValue}</h1>
      <button style={{width:'4rem', height:'3rem', marginRight:'1.5rem'}} onClick={()=> {dispatch(Increment(5))}}>+</button>
      <button style={{width:'4rem', height:'3rem'}} onClick={()=> {dispatch(Decrement())}}>-</button>
      {isLoggedInValue ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
    </div>
  ); 
}

export default App;
*/
