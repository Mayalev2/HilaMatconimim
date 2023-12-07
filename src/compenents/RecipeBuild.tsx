import React from 'react';
import "../App.css"
import Ingredients from './Ingredients';
import Instruction from './Instruction';
import Review from "../compenents/Review"
import data from "../data.json"
import { useState, useEffect, useRef } from "react";




interface Props{
  recipe: {}
}

 function RecipeBuild({recipe}:Props) {  
  const newRec: any = recipe;
  const recipeIngrediant = newRec.recipeIngrediant;
  const recipeInstruction = newRec.instruction;
  let count= 0;

  const [multi, setMessage] = useState(1);
  const  multiRef = useRef(1);
  
  const handleChange = (event:any) => {
   multiRef.current = event.target.value
    if(multiRef.current > 0){
      setMessage(event.target.value);    
    }
  };

       return (        
         <>
            <div className='d-flex justify-content-center'>
                <div className='col-11 col-md-11 col-xl-9 col-xxl-7 d-flex justify-content-center flex-column'  style={{paddingTop:"150px", backgroundColor:"white"}}>
                    <span className='text-center display-2 fw-bold mb-4' style={{color:"rgb(171 108 217)"}}>{newRec.name}</span>
                    <span className='mb-2 mb-md-5  align-self-center col-9' style={{ border:"2px solid rgb(171 108 217)", borderRadius:"15px"}}></span>
                    <div className='d-flex row align-self-center col-11 justify-content-center'>
                        <img className='col-12 col-sm-8 col-xl-6 mb-4' src={`https://matconimim.netlify.app/src/assets/images/cardImg/${newRec.imgSrc}`} alt="Card image cap" style={{ padding:"16px", borderRadius:"20px"}}/>
                        <div className='d-flex flex-column col-12 col-xl-6 text-end mb-5' style={{direction:"rtl"}}>
                            <span className='display-5 mb-4'>מצרכים</span>
                            <div>
                              <span className='ms-2'>הכפל כמויות</span>
                              <input id="message"name="message"  onChange={handleChange}  maxLength={4}   placeholder='1' className='mb-2 text-center' style={{backgroundColor:"rgb(171 108 217 / 31%)", height:"30px", width:"50px", borderRadius:"13px", border:"none"}}></input>
                            </div>
                              {recipeIngrediant.map((item:any) => (
                              <Ingredients ingredent={recipeIngrediant[count]} num={count++} multi={multi}></Ingredients>
                              ))}
                        </div>
                          <Instruction instruction={recipeInstruction}></Instruction>
                          <Review review={newRec.reviwes} stars={newRec.startRate}></Review>
                      <div>
                        </div>
                    </div>
                    
                </div>
            </div>  
         </>
       )
     }
     export default RecipeBuild;
   
