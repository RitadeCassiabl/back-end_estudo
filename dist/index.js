"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/rota_inicial", (req, res) => {
    res.status(200).send("Bem vindo a primeira rota!");
});
app.get("/somar", (req, res) => {
    let y;
    let x;
    if (req.query.x && req.query.y) {
        x = +req.query.x;
        y = +req.query.y;
        res.status(200).json({ resultado: x + y });
    }
    else {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
});
app.get("/subtrair", (req, res) => {
    let y;
    let x;
    if (req.query.x && req.query.y) {
        x = +req.query.x;
        y = +req.query.y;
        res.status(200).json({ resultado: x - y });
    }
    else {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
});
app.get("/multiplicar", (req, res) => {
    let y;
    let x;
    if (req.query.x && req.query.y) {
        x = +req.query.x;
        y = +req.query.y;
        res.status(200).json({ resultado: x * y });
    }
    else {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
});
app.get("/dividir", (req, res) => {
    let y;
    let x;
    if (req.query.x && req.query.y) {
        x = +req.query.x;
        y = +req.query.y;
        if (y == 0) {
            res.status(400).json({
                error: "Não há como dividir um número por zero!",
            });
        }
        else {
            res.status(200).json({ resultado: x / y });
        }
    }
    else {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
});
app.listen(3000, () => console.log("Server funcionando :) na porta 3000"));
