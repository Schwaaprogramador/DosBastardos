const { Sequelize, } = require('sequelize');
const Escritos = require('./modelos/Escritos.js');
//const Users = require('./modelos/Users.js');



const user = 'postgres';
const pass = '7812*';
const dbname = 'dosbastardos';

const database = new Sequelize (`postgres://${user}:${pass}@localhost:5432/${dbname}`, {logging:false});


Escritos(database);
//Users(database);

console.log(database.models);


module.exports = {

    database, ...database.models                          

}