import React from 'react';
import "../PhotoGallery.css"
import Card from "../compenents/Card";
import data from "../data.json"
import { useState, useEffect, useRef } from "react";
import ButtonTdM from '../compenents/ButtonTdM';
import imgSad from '../assets/images/sad-face-in-rounded-square.png'

 function TodayMeal() {
  let exmpale = data["recipes"]["1"]
  const [recipe1, setecipe1] = useState(data["recipes"]["1"]);
  let infoToday = data["TodaysMeaInfo"];
  let chosenMeal = [exmpale];
  let isMeal =true;
  let rnd = 0;
  const clickRecipe = (recipe:object) =>{
  }  
  const [show, setShow] = useState("1");
  const [question, setQuestion] = useState(infoToday["0"]);
  const count = useRef(0);
  const chosenAns = useRef([""]);
  const clickBtnStart = () =>{
    setShow("2")
  }    
  const changeBtn = (event:any) =>{    
    chosenAns.current.push(event)
    console.log(chosenAns);    

    if(count.current!= infoToday.length -1 )
    {
      count.current++;    
      if(event === 'טבעוני' || event === 'בשרי'){
          count.current++;
        }
      setQuestion(infoToday[count.current]);
    }
    else{
      setShow("3");
      for(let i=0; i< data["recipes"].length ; i++){
        for(let j = 0; j< data["recipes"][i]["infoRecipe"].length; j++){
            if(data["recipes"][i]["infoRecipe"][j] != chosenAns.current[j]){
              isMeal =false;
            }
        }
        
        if(isMeal){
          chosenMeal.push(data["recipes"][i]);
        }
        else{
          isMeal = true;
        }
      }
                
        if(chosenMeal.length > 1){
                    rnd = Math.floor(Math.random() * (chosenMeal.length -2 +1)) +1;
          console.log(chosenMeal[rnd] + "" + rnd);
          console.log(chosenMeal);
          setecipe1(chosenMeal[rnd]);
        }
        else{
          setShow("4");
        }
    } 

  }  
       return (        
         <>

         <div className='todayBg col-12 d-flex justify-content-center'>
         {show === "1" &&
            <div className='col-11 col-lg-8 d-flex flex-column justify-content-center '>
              <span className='display-2 text-center mb-4 fw-bold text1ani'>?מה בא לך היום</span>
              <span className='h3 text-center mb-5 text2ani'>לא בטוחה מה מתחשק לך להכין? בעוד כמה רגעים תגלי מה המתכון המושלם עבורך</span>
              <button className="button-78 col-8 col-lg-3 align-self-center btnani" role="button" onClick={clickBtnStart}>בואו נתחיל</button>
            </div>}
            {show === "2" &&
            <ButtonTdM changeBtn={changeBtn} title={question["title"]} btn1={question["btn1"]} btn2={question["btn2"]}></ButtonTdM>
            }
          {show === "3" &&
          <div className='col-12 col-lg-9 d-flex row justify-content-center' style={{paddingTop:"100px"}}>
            <div className='col-12 col-lg-7 d-flex flex-column justify-content-center order-first order-lg-last'>
              <span className='display-2 text-center text-lg-end mb-2 fw-bold'>המתכון המנצח</span>
              <span className='h3 text-center text-lg-end mb-2'>אחרי בחינה מעמיקה המתכון שעליך להכין הוא</span>
            </div>
            <div className="d-flex justify-content-center row col-12 col-lg-5 order-last order-lg-first align-content-center mx-auto winnerRecipe">
                 <Card  recipe={recipe1} name={recipe1["name"]} description={recipe1["descriptions"]} imgSrc={recipe1["imgSrc"]} isVegan = {recipe1["veganReceipe"]} isParve = {recipe1["parveReceipe"]} stars = {recipe1["startRate"]} key={recipe1["name"]} onselectRrecie={clickRecipe}></Card>            
                 </div>  
            </div>}
            {show === "4" &&
          <div className='col-12 col-lg-9 d-flex row justify-content-center' style={{paddingTop:"100px"}}>
            <div className='col-12 col-lg-7 d-flex flex-column justify-content-center order-first order-lg-last'>
              <span className='display-2 text-center text-lg-end mb-2 fw-bold'>לצערנו עוד לא יצרת מתכון שכזה</span>
              <span className='h3 text-center text-lg-end mb-2'>זה הזמן לחזור למטבח ולבשל עוד מתכונים</span>
            </div>
            <div className="d-flex justify-content-center row col-6 col-lg-4 order-last order-lg-first align-content-center mx-auto ">
              <img src={imgSad} />
            </div>  
            </div>
            }
</div> 
         </>
       )
     }
     export default TodayMeal;