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
    const y = +req.query.y;
    const x = +req.query.x;
    if (Number.isNaN(y) || Number.isNaN(x)) {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
    res.status(200).json({ resultado: x + y });
});
app.get("/subtrair", (req, res) => {
    const y = +req.query.y;
    const x = +req.query.x;
    if (Number.isNaN(y) || Number.isNaN(x)) {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
    res.status(200).json({ resultado: x - y });
});
app.get("/multiplicar", (req, res) => {
    const y = +req.query.y;
    const x = +req.query.x;
    if (Number.isNaN(y) || Number.isNaN(x)) {
        res.status(400).json({
            error: "Os valores de y e x devem ser números! faça a requisição novamente",
        });
    }
    res.status(200).json({ resultado: x * y });
});
app.get("/dividir", (req, res) => {
    const y = +req.query.y;
    const x = +req.query.x;
    if (Number.isNaN(x) || Number.isNaN(y)) {
        res
            .status(400)
            .json({
            error: "Os valores de y e x devem ser números ! faça a requisição novamente",
        });
    }
    else if (y == 0) {
        res
            .status(400)
            .json({
            error: "Não há como dividir um número por 0 ! faça a requisição novamente"
        });
    }
    else {
        res.status(200).json({ resultado: x / y });
    }
});
app.listen(3000, () => console.log("Server funcionando :) na porta 3000"));
