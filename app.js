const express=require('express');
const port=3002;

const bodyParser =requiere('body-parser');
const routes=requiere('./routes/routes')
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server=app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log (`El servidor escucha en el puerto ${server.address().port}`);
});