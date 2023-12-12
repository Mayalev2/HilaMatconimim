import { useState } from "react";
import '/src/App.css' 
import fontson from "../assets/font/NotoSansHebrew-VariableFont_wdth,wght.ttf"
interface Props{
    changeBtn: (event:any) => void,
    title:string,
    btn1:string,
    btn2:string
}
function ButtonTdM ({changeBtn, title, btn1, btn2}:Props){
    return (
    <>
            <div className='col-12 col-lg-8 d-flex flex-column justify-content-center' style={{direction:"rtl"}}>
            <span className='display-2 text-center mb-5 fw-bold' >{title}</span>
              <div className='col-12 col-lg-9 align-self-center d-flex row justify-content-center'>
              <button className="button-78 col-6 col-lg-4 align-self-center me-5 ms-5 mb-4 son" style={{fontFamily:`${fontson}`}} role="button" onClick={ () =>{changeBtn(btn1)}}>{btn1}</button>  
                  <button className="button-78 col-6 col-lg-4 align-self-center me-5 ms-5 mb-4 son" style={{fontFamily:`${fontson}`}} role="button" onClick={ () =>{changeBtn(btn2)}}>{btn2}</button>  
              </div>
          </div>
    </>);
}
export default ButtonTdM;