import express from "express";
import products from './products.ts';
import log from "./log.ts";

const app = express();

const port = process.env.PORT || 3000;

app.get("/products", products);

app.post("/orders", (req, res) => res.sendStatus(200));

app.listen(port, () => log("INFO", "Server running", { port }));
