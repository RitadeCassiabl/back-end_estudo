import express from "express";

const app = express();
app.use(express.json());

app.get('/rota_inicial', (req, resp) => {
    resp.status(200).send("Bem vindo a primeira rota!")
});

app.get('/somar', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 

    resp.json({ soma: `${y+x}`});
});

app.get('/subtrair', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 

    resp.json({ subtração: `${y-x}`});
});

app.get('/multiplicar', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 

    resp.json({ multiplicação: `${y*x}`});
});

app.listen(3000, () => 
console.log('Server funcionando :) na porta 3000')
);

