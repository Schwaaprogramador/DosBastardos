import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getEscritos } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import styled from './Escritos.module.css';




const Escritos = () => {

    const dispatch = useDispatch()
    const escritos = useSelector(state=> state.escritos);

    useEffect(()=>{
        dispatch(getEscritos())
    }, [ dispatch ]);


    return (<>


            <div className={styled.container}>
                <NavBar/>

                <h2>Escritos Registrados:</h2>
                <br></br>
                <div className={styled.escritosContainer}>
                    {escritos.map( escrito =><div className={styled.escrito}> <h2> {escrito.author} </h2>
                                            <h3> {escrito.title} </h3>
                                            <p>  {escrito.description} </p> </div> )}

                </div>
                
            </div>
            </>)
    
}

export default Escritos;

