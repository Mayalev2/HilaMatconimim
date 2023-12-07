import React from 'react';
import "../PhotoGallery.css"
import data from "../data.json"
import { BrowserRouter, Route, Link } from "react-router-dom";
import PhotoFg from '../compenents/PhotoFg';

 function PhotoGallery() {  
  let recipes = data["recipes"];

       return (        
         <>

         <div className='d-flex justify-content-center row mx-auto' style={{paddingTop:"70px", width:"100%"}}>
         {recipes.map((item) => (
          
        <Link state={item}  to={"/Recipe"} className=" col-4 col-lg-2" style={{textDecoration:"none", color:"black", padding:"0px"}}>
          <div className='photoGallery' style={{padding:"2px"}}>
          <PhotoFg srcName={item["imgSrc"]}></PhotoFg>
            
            <div className='galleryText text-center'>{item["name"]}</div>
          </div>
         </Link>
  
        
        ))}
         </div>
         </>
       )
     }
     export default PhotoGallery;