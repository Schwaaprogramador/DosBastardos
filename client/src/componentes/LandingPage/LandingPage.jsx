import React from "react";
import { Link } from "react-router-dom";
import styled from './LandingPage.module.css';

function LandingPage(){
    return(
    <>
                <div className={styled.container}>
                        
                        <h1 className={styled.landingTitle}>DOS BASTARDOS</h1>
                       
                        <Link to='/home'>  <button>Entrar</button>  </Link> 
                        
                </div>
    </>)
}

export default LandingPage;