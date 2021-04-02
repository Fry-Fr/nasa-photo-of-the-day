import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VidPlyr = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Poppins', sans-serif;
        width: 75%;
        padding: .5rem 0;
    }
    h4 {
        margin: 1rem 0 0;
        text-decoration: underline;
    }
    iframe {
        border: 1px solid green;
        border-left: none;
        border-right: none;
    }
    @media(max-width:700px){
        align-items: start;
        justify-content: start;
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
const ImgWrp = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    img {
        border: 1px solid rgba(0,5,45, 1);
        border-radius: .5rem;
        box-shadow: 0 .15rem 1rem .25rem;
        width: 98%;
    }
    p {
        font-family: 'Poppins', sans-serif;
        width: 75%;
        padding: .5rem 0;
    }
    h4 {
        margin: 1rem 0 0;
        text-decoration: underline;
    }
`

const Description = (props) => {
   if(props.mediaType === "video") {
    return (
        <VidPlyr>
            <ReactPlayer url={props.url} playing={0} controls={true} height={"720px"} width={"100%"}/>
            <h4>Explanation</h4>
            <p>{props.expl}</p>
        </VidPlyr>
     )
   }else if(props.mediaType === "image"){
       return (
           <ImgWrp>
            <img src={props.url} alt="apod"/>
            <h4>Explanation</h4>
            <p>{props.expl}</p>
           </ImgWrp>
       )
   }else {
       return (
           <>
           </>
       )
   }
}

export default Description