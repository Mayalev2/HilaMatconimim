import "../PhotoGallery.css"
import React, { useEffect, useState } from "react";
import Challawheel from "../compenents/Challa-wheel";

 function CahallaWheel() {  
  const chalotArr = ['חלה עגולה','חלת דג','חצי שומשום ','חלה סינית','חלה קלאסית','חלת לב'];
       return (        
         <>
                   <div className="d-flex justify-content-center col-12 col-lg-8 mx-auto" style={{paddingTop:"150px"}}>
          <div className="d-flex flex-column text-center col-12">
                <span className="display-3 mb-2 fw-bold">גלגלי וגלי את החלה</span>
                <span className="h3">שישי שוב הגיע? אין לך מושג איזה חלה את מכינה? גלגלי וגלי</span>
          </div>

         </div>
         <Challawheel chalot={chalotArr}></Challawheel>

         </>
       )
     }
     export default CahallaWheel;