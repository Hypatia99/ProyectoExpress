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
app.get('/users/:id',(request, reponse) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo usuario
app.post('/users',(request, reponse) => {
    pool.query('INSERT INTO users SET ?',request.body, (error, result)=>{
        if (error) throw error;

        response.status(201).send (`Use added whit ID: ${result.insertId}`);
    });
});

//Actualizar usuario existente
app.put('/users/:id',(request, reponse) => {
    const id= request.params.id;

    pool.query('UPDATE users SET ? WHERE id = ? ',[request.body, id], (error, result)=>{
        if (error) throw error;

        response.send ('User updated successfully. ');
    });
});

//Eliminar Usuario
app.delete('/users/:id',(request, reponse) => {
    const id= request.params.id;

    pool.query('DELATE FROM users WHERE id = ?', id, (error, result)=>{
        if (error) throw error;

        response.send ('User deleted. ');
    });
});

};
module.exports = routes;