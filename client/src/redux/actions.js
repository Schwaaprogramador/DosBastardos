import axios from 'axios';

export const GET_ESCRITOS = "GET_ESCRITOS"
export const POST_ESCRITOS = "POST_ESCRITOS"


//----------MOSTRAR TODOS LOS ESCRITOS----------
export const getEscritos = ()=>{
    return async function(dispatch){
        const escritos = await axios.get("http://localhost:3001/escritos")
        return dispatch({
            type: GET_ESCRITOS,
            payload: escritos.data, // data porque axios devuelve la info en un propiedad data
        })
    }
}


//--------------CREAR UN ESCRITO----------
// Esta function recibe un payload, que es la info del form.
export const postEscrito = (payload)=>{
    return async function(dispatch){
        const createdEscrito = await axios.post("http://localhost:3001/escritos", payload)
        return dispatch({
            type: POST_ESCRITOS,
            payload: createdEscrito.data,
        })
    }
    
}

