const { Router } = require('express');
const { getDataBaseEscritos, createEscrito } = require('../controllers/escritosController.js');


const escritosRouter = Router();


//TRAER TODOS LOS ESCRITOS
escritosRouter.get('/', async (request, response) => {

    const escritos = await getDataBaseEscritos();

    try {
        response.status(200).send(escritos)

    } catch (error) {
        
        response.status(404).send(error.message)
    }
})



//-----------------------------------------------
//CREAR UN ESCRITO NUEVO
escritosRouter.post('/', async (request, response)=>{

    const { author, title, description, escrito } = request.body;
    
    try {

        const newEscrito = await createEscrito( author, title, description, escrito);
       
        response.status(200).send('Escrito Creado')

    } catch (error) {

        response.status(404).send(error.message + ' Escrito No fue Creado')
    }
})


module.exports = escritosRouter;