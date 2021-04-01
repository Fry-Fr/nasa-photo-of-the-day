import React, { useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header'
import Description from './components/Description'


function App() {

  const [ apod, setApod ] = useState(undefined);
  const [ mediaType, setMediaType ] = useState(undefined)
  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=dVwvWe7dYlZiGsaFpqKUkgGHb5kfRcvl83J8VEWK')
      .then( resp => {
        setApod(resp.data)
        setMediaType(resp.data.media_type)
      })
      .catch( err => {
        console.log(err)
      })
  },[])

  return (
    <>
      {apod ? <Header title={apod.title} date={apod.date}/> : "NO APOD"}
      {apod ? <Description url={apod.url} mediaType={mediaType}/> : "NO APOD"}
    </>
  );
}

export default App;
