import React from "react";
import { Link } from "react-router-dom";
import styled from './NavBar.module.css';

const NavBar = ()=> {
    return (<>


            <div className={styled.container}>   
                <div className={styled.enlacesContainer}>
                    <Link to='/home' className={styled.enlace}>Inicio</Link>
                    <Link to='/escritos' className={styled.enlace}>Escritos</Link>
                    <Link to='/noticias' className={styled.enlace}>Noticias</Link>
                    <Link to='/form-registro' className={styled.enlace}>Envia tu Escrito</Link>
                    <Link to='/contactanos' className={styled.enlace}>Contactanos</Link>
                </div>
            
            </div>
            
            
            
            </>)
};


export default NavBar;