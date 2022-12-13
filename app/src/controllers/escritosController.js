const { Escritos } = require('../database.js');
//const Users = require('../modelos/Users.js');


//TRAER LOS ESCRITOS DE LA BASE DE DATOS
const getDataBaseEscritos = async ()=>{
    const escritos = await Escritos.findAll();
    console.log(escritos)
    return escritos;
    
}

//---------------------------------------------------------------
//CREAR UN ESCRITO NUEVO EN LA BASE DE DATOS
const createEscrito = async ( author, title, description, escrito)=>{

    const newEscrito = await Escritos.create({author, title, description, escrito});
    return newEscrito;

}


module.exports = {
    getDataBaseEscritos,
    createEscrito,
}