import React, {  useState} from "react";
import NavBar from "../NavBar/NavBar";
import styled from "./FormRegistro.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postEscrito } from "../../redux/actions";




// author, title, description, escrito
const FormRegistro = ()=> {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post);

    //ESTADO LOCAL------------------------
    const [inputs, setInputs] = useState({
        author: '', 
        title: '', 
        description:"", 
        escrito:"", 
    });


    // HANDLERS ----------------
    const handleSubmit =   (evento) => {
        evento.preventDefault();
        dispatch(postEscrito(inputs));
        setInputs({
            author: '', 
            title: '', 
            description:"", 
            escrito:"", 
    })}
//---------------------------------------------------
    const handleInputs = (evento) => {

        setInputs({
            
            ...inputs,
            [evento.target.name]: evento.target.value, 
        })

        }



    // RENDER DEL COMPONENTE -----------------
    return ( <>  

            <div className={styled.container}>
            <NavBar/>
                <form className={styled.form}>


                    <h3>{post}</h3>
                    <div>
                        <label>Autor:</label>
                        <input
                            type='text'
                            value={inputs.author}
                            name='author'
                            onChange={handleInputs}></input>  
                    </div>

                    <div>
                        <label>Titulo:</label>
                        <input
                            type='text'
                            value={inputs.title}
                            name='title'
                            onChange={handleInputs}></input>  
                    </div>

                    <div>
                        <label>Descripcion:</label>
                        <input
                            type='text'
                            value={inputs.description}
                            name='description'
                            onChange={handleInputs}></input>  
                    </div>

                    <div>
                        <label>Escrito:</label>
                        <input
                            type='text'
                            value={inputs.escrito}
                            name='escrito'
                            onChange={handleInputs}></input>  
                    </div>

                    <button type="submit" onClick={handleSubmit} > Registrar Escrito </button>

                </form>
            
            </div>
            </>)
};


export default FormRegistro;