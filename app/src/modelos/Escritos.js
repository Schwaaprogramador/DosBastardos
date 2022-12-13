const { DataTypes } = require('sequelize');

const Escritos = (database)=>{


database.define('Escritos', {

        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        description: {
            type: DataTypes.STRING,
        },

        escrito: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })

}


module.exports = Escritos;