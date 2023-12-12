import { useState } from "react";
import ListGroup from "./compenents/ListGroup";
import Alert from "./compenents/Alert"
import Button from "./compenents/Button"
import Card from "./compenents/Card";
import Bafi from "./compenents/Bafi";
import NavBar from "./compenents/NavBar"
import './App.css'
import React, { useEffect } from 'react';
import data from "./data.json"
import {Outlet} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import Layout from "./pages/Layout"
import ReactDOM from "react-dom/client";
import PhotoGallery from "./pages/PhotoGallery";
import CahallaWheel from "./pages/CahallaWheel";
import TodayMeal from "./pages/TodayMeal";



export default function App (){
  useEffect(() => {
    <link rel="icon" href="/src/assets/images/bafi.ico" />
    document.title = 'מתכונימים';
  }, []);

  let recipes = data["recipes"];


  const [isClick, setIsClick] = useState('');
  const [color, setColor] = useState('');
  // return <div><ListGroup items={items} heading="foods" onSelecetedItem={handlerSelectItem}/></div>    
  {/* <Alert>{isClick}</Alert><Button color={color} onClick={click}>click</Button>  */}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="Recipe" element={<Recipe />}  />
          <Route path="PhotoGallery" element={<PhotoGallery />}  />
          <Route path="CahallaWheel" element={<CahallaWheel />}  />
          <Route path="/" element={<TodayMeal />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  
    </>

  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)