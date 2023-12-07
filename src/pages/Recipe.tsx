import React from 'react';
import RecipeBuild from '../compenents/RecipeBuild';
import Bafi from "../compenents/Bafi"
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


    function Recipe() {  
        useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
      const { state } = useLocation();
    
        return (        
                <>
                    <RecipeBuild  recipe={state}></RecipeBuild>
                    <Bafi></Bafi>
                </>
            
            );
        }
    export default Recipe;