import express from "express";

const app = express();
app.use(express.json());

app.get("/rota_inicial", (req, resp) => {
  resp.status(200).send("Bem vindo a primeira rota!");
});

app.get("/somar", (req, resp) => {
  const y = +req.query.y;
  const x = +req.query.x;

  if (Number.isNaN(y) || Number.isNaN(x)) {
    resp.status(400).json({
      error:
        "Os valores de y e x devem ser números! faça a requisição novamente",
    });
  }
  resp.status(200).json({ resultado: y + x });
});

app.get("/subtrair", (req, resp) => {
  const y = +req.query.y;
  const x = +req.query.x;

  if (Number.isNaN(y) || Number.isNaN(x)) {
    resp.status(400).json({
      error:
        "Os valores de y e x devem ser números! faça a requisição novamente",
    });
  }
  resp.status(200).json({ resultado: y - x });
});

app.get("/multiplicar", (req, resp) => {
  const y = +req.query.y;
  const x = +req.query.x;

  if (Number.isNaN(y) || Number.isNaN(x)) {
    resp.status(400).json({
      error:
        "Os valores de y e x devem ser números! faça a requisição novamente",
    });
  }
  resp.status(200).json({ resultado: y * x });
});

app.get("/dividir", (req, resp) => {
  const y = +req.query.y;
  const x = +req.query.x;

  if (Number.isNaN(x) || Number.isNaN(y)) {
    resp
      .status(400)
      .json({
        error:
          "Os valores de y e x devem ser números ! faça a requisição novamente",
      });
  }else if(y == 0){
    resp
      .status(400)
      .json({
        error:
          "Não há como dividir um número por 0 ! faça a requisição novamente"
      })
  }else{
    resp.status(200).json({ resultado: x / y });
  } 
});

app.listen(3000, () => console.log("Server funcionando :) na porta 3000"));
