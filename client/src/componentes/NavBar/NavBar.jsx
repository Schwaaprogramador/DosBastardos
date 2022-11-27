import React from "react";
import { Link } from "react-router-dom";
import styled from './NavBar.module.css';

const NavBar = ()=> {
    return (<>
            <div className={styled.container}>
                <div className={styled.logo}>
                    <h3>Dos <span className={styled.span}> Bastardos </span> </h3>
                </div>
                

                <div className={styled.enlaces}>
                    <Link to='/home'>Inicio</Link>
                    <Link to='/form-registro'>Registro</Link>
                </div>
            
            </div>
            
            
            
            </>)
};


export default NavBar;