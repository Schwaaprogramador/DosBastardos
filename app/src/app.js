const express = require('express');
const morgan = require('morgan');
const server = express();
const { Escritos } = require ('./database.js');
const router = require('./routes/index.js');
const cors = require('cors')


//middlewares
server.use(cors())
server.use(express.json());
server.use(morgan('dev'))

//Index del Router para mandar todas las rutas.
server.use('/', router)


module.exports = server;