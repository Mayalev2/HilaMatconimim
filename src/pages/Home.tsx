import React from 'react';
import Card from "../compenents/Card";
import Bafi from "../compenents/Bafi";
import NavBar from "../compenents/NavBar"
import data from "../data.json"
import Recipe from './Recipe';


 function Home() { 
    let recipes = data["recipes"];
    let bafiSentence = ['לא לשכוח להדליק תנור','תמיד להפריד בין חומרים רטובים ליבשים','הב'];
    let rndSent = bafiSentence[Math.floor(Math.random() * bafiSentence.length)];
  
    const randomSent = () =>{
      let rndSent = bafiSentence[Math.floor(Math.random() * bafiSentence.length)];
    }
    const clickRecipe = (recipe:object) =>{
    }
    setInterval(randomSent,1000);
       return (        
         <>
         <NavBar></NavBar>
      <div className="d-flex justify-content-center row col-10 align-content-center mx-auto" style={{paddingTop:"150px"}}>
      {recipes.map((item) => (
          <Card recipe={item} name={item["name"]} description={item["descriptions"]} imgSrc={item["imgSrc"]} isVegan = {item["veganReceipe"]} isParve = {item["parveReceipe"]} stars = {item["startRate"]} key={item["name"]} onselectRrecie={clickRecipe}></Card>
        ))}
  </div>
  {/* <Bafi sentence={"rndSent"}></Bafi> */}
         </>);
     }
export default Home;