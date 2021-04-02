import React, { useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header'
import Description from './components/Description'
import styled from 'styled-components'

const Main = styled.div`
  min-height: 100vh;
  background: rgb(43, 55, 56,.85);
`


function App() {

  const [ apod, setApod ] = useState(undefined);
  const [ mediaType, setMediaType ] = useState(undefined)
  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=dVwvWe7dYlZiGsaFpqKUkgGHb5kfRcvl83J8VEWK&date=2012-06-14')
      .then( resp => {
        setApod(resp.data)
        setMediaType(resp.data.media_type)
      })
      .catch( err => {
        console.log(err)
      })
  },[])

  return (
    <Main>
      {apod ? <Header title={apod.title} date={apod.date}/> : "NO APOD"}
      {apod ? <Description url={apod.url} mediaType={mediaType} expl={apod.explanation}/> : "NO APOD"}
    </Main>
  );
}

export default App;
