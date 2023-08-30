import express from "express";

const app = express();
app.use(express.json());

app.get('/rota_inicial', (req, resp) => {
    resp.status(200).send("Bem vindo a primeira rota!")
});

app.get('/somar', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 

    if(Number.isNaN(y) || Number.isNaN(x)){
        resp.status(400).json({ error: "Os valores de y e x devem ser números! faça a requisição novamente"})
    }
    resp.status(200).json({ Resultado: y+x});
});

app.get('/subtrair', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 
    
    if(Number.isNaN(y) || Number.isNaN(x)){
        resp.status(400).json({ error: "Os valores de y e x devem ser números! faça a requisição novamente"})
    }
    resp.status(200).json({ Resultado: y-x});
});

app.get('/multiplicar', (req, resp) => {
    const y = +req.query.y; 
    const x = +req.query.x; 

    resp.json({ multiplicação: `${y*x}`});
});

app.listen(3000, () => 
console.log('Server funcionando :) na porta 3000')
);

