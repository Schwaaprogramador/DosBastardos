const server = require('./src/app.js');
const { database } = require('./src/database.js');

server.listen(3001, async ()=>{
    // await database.sync();
     await database.sync({force: false}) // elimina o no los registros de la database. Dejas las tablas vacias.
    // await database.sync({alter: false}) modifica la table.
    console.log('Ready en el puerto 3001')
})