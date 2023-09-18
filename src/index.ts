import express from "express";
import { Request } from "express";
import { Response } from "express";

const app = express();
app.use(express.json());

app.get("/rota_inicial", (req: Request, res: Response) => {
  res.status(200).send("Bem vindo a primeira rota!");
});

app.get("/somar", (req: Request, res: Response) => {
  let y: number;
  let x: number;

  if (req.query.x && req.query.y) {
    x = +req.query.x;
    y = +req.query.y;
    if (Number.isNaN(x) || Number.isNaN(y)) {
      res.status(400).json({
        error:
          "Os valores de y e x devem ser números! faça a requisição novamente",
      });
    } else {
      res.status(200).json({ resultado: x + y });
    }
  }
});

app.get("/subtrair", (req: Request, res: Response) => {
  let y: number;
  let x: number;

  if (req.query.x && req.query.y) {
    x = +req.query.x;
    y = +req.query.y;
    if (Number.isNaN(x) || Number.isNaN(y)) {
      res.status(400).json({
        error:
          "Os valores de y e x devem ser números! faça a requisição novamente",
      });
    } else {
      res.status(200).json({ resultado: x - y });
    }
  }
});

app.get("/multiplicar", (req: Request, res: Response) => {
  let y: number;
  let x: number;

  if (req.query.x && req.query.y) {
    x = +req.query.x;
    y = +req.query.y;
    if (Number.isNaN(x) || Number.isNaN(y)) {
      res.status(400).json({
        error:
          "Os valores de y e x devem ser números! faça a requisição novamente",
      });
    } else {
      res.status(200).json({ resultado: x * y });
    }
  }
});

app.get("/dividir", (req: Request, res: Response) => {
  let y: number;
  let x: number;

  if (req.query.x && req.query.y) {
    x = +req.query.x;
    y = +req.query.y;
    if (y == 0) {
      res.status(400).json({
        error: "Não há como dividir um número por zero!",
      });
      if (Number.isNaN(x) || Number.isNaN(y)) {
        res.status(400).json({
          error:
            "Os valores de y e x devem ser números! faça a requisição novamente",
        });
      } else {
        res.status(200).json({ resultado: x / y });
      }
    }
  }
});

app.listen(3000, () => console.log("Server funcionando :) na porta 3000"));
