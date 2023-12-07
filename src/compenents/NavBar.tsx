import { useState } from "react";
import '/src/App.css'
import React from "react";
import { BrowserRouter, Route, Link, Outlet} from "react-router-dom";
import Recipe from "../pages/Recipe";
import { Nav, Navbar} from 'react-bootstrap';


function navBar (){
  const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
    <>
 
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:"32px", height:"75px",width:"100%",position:"fixed", zIndex:"2", backgroundColor:"rgb(255, 255, 255)"}}>
  <div className="container-fluid navBarDES" style={{direction:"rtl",backgroundColor:"#f8f9fa"}}>
  <Link to="/" style={{textDecoration:"none"}}><a className="navbar-brand  fw-bold positionBrand" style={{color:"rgb(171 108 217)", fontSize:"30px", top:"8px"}} href="Recipe">מתכונימים</a></Link>
    <Navbar collapseOnSelect  expand="lg" className="justify-content-end text-end m-0 m-lg-auto">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block d-flex">
        <Nav.Item className="text-center">
            <Nav.Link eventKey="1" as={Link} to="/">
          בית
          </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <Nav.Link eventKey="2" as={Link} to="/TodayMeal">
            מה באלנו היום
          </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-center">
             <Nav.Link className="" eventKey="3" as={Link} to="/PhotoGallery">
                      גלריית תמונות
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-center">
             <Nav.Link className="" eventKey="4" as={Link} to="/CahallaWheel">
              גלגל החלות    
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <span className="nav-link active" aria-current="page" >גלגל החלות</span>
        </li>
        <li className="nav-item">
            <Link to="/PhotoGallery" style={{textDecoration:"none"}}>
          <span className="nav-link">גלריית תמונות</span></Link>
        </li>
        <li className="nav-item">
            
        <Link to="/Recipe" style={{textDecoration:"none"}}> <span className="nav-link" >מה באלנו היום</span></Link>
        </li>
      </ul>
      <input className="me-auto d-none d-lg-block" placeholder="חפשי..." style={{border:"transparent", boxShadow: "rgb(177 171 171) 0px 0px 3px inset", height:"35px", borderRadius:"15px", direction:"rtl"}}></input>
    </div> */}
          <input className="d-none d-lg-block" placeholder="חפשי..." style={{border:"transparent", boxShadow: "rgb(177 171 171) 0px 0px 3px inset", height:"35px", borderRadius:"15px", direction:"rtl"}}></input>

  </div>
</nav>

<Outlet />
    </>);
}
export default navBar;