let mongoose = require('mongoose');
//Vamos a unirlo al modelo
let Pintores = require('../models/Pintores');

let pintoresController = {};

/*LISTAR -> FIND()*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintores)=>{
            if(err){
                console.log('Error:, err')
    }
        res.render('../views/index',{
            pintores: pintores,
            titulo: "Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;