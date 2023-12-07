import { useState } from "react";
import '/src/App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Recipe from "../pages/Recipe";

interface Props{
    name:string;
    description: string;
    imgSrc: string;
    isVegan : string;
    isParve: string
    stars: number
    recipe: {}
    onselectRrecie: (name: object) => void;
}
function card ({recipe, name, description , imgSrc, isVegan , isParve, stars, onselectRrecie}:Props){
    const [isClick, setIsClick] = useState('');
    
    return (
    <>
       <Link state={recipe}  to={"/Recipe"} className="mLink" style={{width: "350px",  textDecoration:"none", color:"black",marginBottom:"50px" }}>
    <div onClick={ () =>{onselectRrecie(recipe)}} className="card mx-auto card-2" style={{ padding: "0px", border:"transparent",borderRadius:"6px", boxShadow:"rgb(58, 58, 58,14%) 1px 2px 10px 1px", cursor:"pointer"}}>
        <img className=" card-2" src={`/src/assets/images/cardImg/${imgSrc}`} alt="Card image cap" style={{ padding:"16px", borderRadius:"20px"}}/>
        <div className="card-body" style={{height:"150px", textDecoration:"none"}}>
            <div className="d-flex row justify-content-end " style={{height:"26px"}}>
                <div className="d-flex justify-content-center mb-3 col-2 align-self-left">
                <span className="star"></span>
                    <span className="fw-bold h5">{stars}</span>
                </div>
                <h5 className="card-title text-end col-9 mText">{name}</h5>
            </div>
            <p className="card-text text-end">{description}</p>  

            <div className="d-flex justify-content-end col-12" style={{position:"absolute", bottom:"12px", right:"12px"}}>
                {isVegan === 'yes' &&
                <span className="d-flex align-self-center text-center me-2"style={{backgroundColor: "#F2D6FF", color:"white" , padding: "7px", borderRadius: "35px"}}>טבעוני</span>  
                }
                {isParve === 'yes' &&
                <span className="d-flex align-self-center text-center" style={{backgroundColor: "#F2D6FF", color:"white", padding: "7px", borderRadius: "35px"}}>פרווה</span>
                }
            </div> 
        </div>
        </div></Link> 
    </>);
}
export default card;