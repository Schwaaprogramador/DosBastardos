import React from "react";
import styled from './LandingPage.module.css';

function LandingPage(){
    return(
    <>
                <div className={styled.container}>
                        <div className={styled.center}>
                        <h1 className={styled.landingTitle}>DOS BASTARDOS</h1>
                       
                        <button className={styled.button}>Entrar</button>
                        </div>
                </div>
    </>)
}

export default LandingPage;