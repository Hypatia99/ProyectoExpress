//Cargue la conexion del grupo MySQL
const { request, response, Router } = require('express');
const pool = require('../data/config');
//Ruta de la app
const routes = app =>{
    //mostrar mensaje de bienvenida de root
    app.get('/',(request, response)=>{
        response.send({
            message:'Biencenido a Node.js Express REST API!'
        });
    });
//Mostrar todos los usuarios
app.get('/users',(request, response)=>{
    pool.query('SELECT * FROM users', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Mostrar un solo usuario por ID
app.get('/users/:id',(recuest, reponse) => {
    const id = recuest.params.id;

    pool.query('SELECT * FROM users', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo usuario
app.post('/users',(recuest, reponse) => {
    pool.query('INSERT INTO users SET ?',request.body, (error, result)=>{
        if (error) throw error;

        response.status(201).send (`Use added whit ID: ${result.insertId}`);
    });
});

};
module.exports = routes;