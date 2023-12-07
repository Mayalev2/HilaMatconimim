import React from 'react';
import "../PhotoGallery.css"
import data from "../data.json"
import { BrowserRouter, Route, Link } from "react-router-dom";

interface Props{
    srcName: string
}
 function PhotoFg({srcName}: Props) {  
  let recipes = data["recipes"];
  const imgUrl = new URL(`/src/assets/images/cardImg/${srcName}`, import.meta.url).href

       return (        
         <>
            <img className='col-12 galleryImg' src={imgUrl} style={{}} />

         </>
       )
     }
     export default PhotoFg;