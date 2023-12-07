import React from 'react';
import "../PhotoGallery.css"
import data from "../data.json"
import { BrowserRouter, Route, Link } from "react-router-dom";


 function PhotoGallery() {  
  let recipes = data["recipes"];

       return (        
         <>

         <div className='d-flex justify-content-center row' style={{paddingTop:"90px", width:"100%"}}>
         {recipes.map((item) => (
          
        <Link state={item}  to={"/Recipe"} className=" col-4 col-lg-2" style={{textDecoration:"none", color:"black", padding:"0px"}}>
          <div className='photoGallery' style={{padding:"2px"}}>
            <img className='col-12 galleryImg' src={`/src/assets/images/cardImg/${item["imgSrc"]}`} style={{}} />
            <div className='galleryText text-center'>{item["name"]}</div>
          </div>
         </Link>
  
        
        ))}
         </div>
         </>
       )
     }
     export default PhotoGallery;