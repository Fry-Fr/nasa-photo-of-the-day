import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VidPlyr = styled.div`
    padding: 1rem 0;
    margin: 1rem;
    border: 3px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:700px){
        align-items: start;
        justify-content: start;
        height: 70vh;
        div:first-child{
            display:flex;
            justify-content:center;
        }
        iframe{
            width: auto;
            height: 30vh;
        }
    }
`

const Description = (props) => {
   if(props.mediaType === "video") {
    return (
        <VidPlyr>
            <ReactPlayer url={props.url} playing={0} controls={true} height={"720px"} width={"100%"}/>
        </VidPlyr>
     )
   }else {
       return (
           <>
           </>
       )
   }
}

export default Description