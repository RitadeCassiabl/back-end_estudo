import express from "express";

const app = express();

app.get('/rota_inicial', (req, resp) => 
resp.status(200).send("Bem vindo a primeira rota!")
);

app.listen(3000, () => 
console.log('Server funcionando :) na porta 3000')
);

