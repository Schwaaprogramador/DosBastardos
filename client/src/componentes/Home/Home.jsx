import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import styled from './Home.module.css';

const Home = ()=>{

    return (<>
                
            <div className={styled.container}>
                
                    <NavBar/>
                    <h1>Dos Bastardos</h1>
                    <h4>Filosofia, literatura y cultura</h4>
                    

                    <div className={styled.frase}>
                        <h3>"Toda verdad pasa por tres etapas. Primero, es ridiculizada. En segundo lugar, es violentamente rechazada. En tercer lugar, es aceptada como evidente por sí misma."</h3>
                    </div>
                    
            </div>
                </>)
}

export default Home;