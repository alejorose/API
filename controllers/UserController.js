const { all } = require('../app');
const User = require('../models/User');
const user = require('../models/User');

function create(req, res) {
    var user = new User();
    var params = req.body;

    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.age = params.age;
    user.role = params.role;

    user.save( (error, userCreated) => {
        if(error) {
            res.status(500).send({
                statusCode: 500,
                message: "error en el servidor"

            })
            
        }else {
                if(!userCreated){
                    res.status(400).send({
                        statusCode:400,
                        message:"Error al crear usuario"
                    })

                }else {
                res.status(200).send({ 
                    statusCode:200,
                    message:"se creo el usuario con exito",
                    dataUser: userCreated
                 })
            }
            }
    })
}

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.idUser;

    User.findByIdAndUpdate( idUser, parameters, (error, userUpdated) =>{
        if(error){
            res.status(500).send ({
                statusCode: 500,
                message:"Error en el servidor"
            })
        }else {
            if(!userUpdated){
                res.status(400).send({
                    statusCode:400,
                    message:"Error al acrtualizar usuario"
                })

            }else {
            res.status(200).send({ 
                statusCode:200,
                message:"se modifico el usuario con exito",
                
             })
        }
        }
    })
}

function remove(req, res){
    var idUser = req.params.idUser;

    User.findByIdAndDelete( idUser, (error, userRemoved) =>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "error en el servidor"
            })
        }else {
            if(!userRemoved){
                res.status(400).send({
                    statusCode: 400,
                    message:"error al eliminar usuario"
                })
            }else {
                res.status(200).send({
                    statusCode:200,
                    message:"se elimino con exito"
                })
            }
        }
    })
}

function getAllUsers(req, res){
    var role = req.params.role;
    User.find({role:role}, (error, allUsers) =>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "error en el servidor"
            })
        }else {
                res.status(200).send({
                    statusCode:200,
                    message:"se listaron los usuarios con exito",
                    allUsers: allUsers
                })
            
            
            
        }
    })
}


module.exports = {
    create,
    update,
    remove,
    getAllUsers
}