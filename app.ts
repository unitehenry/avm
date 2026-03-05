import express from "express";
import { type Product } from "./types.ts";
import log from "./log.ts";

const app = express();

const port = process.env.PORT || 3000;

app.get("/products", (req, res) => res.sendStatus(200));

app.post("/orders", (req, res) => res.sendStatus(200));

app.listen(port, () => log("INFO", "Server running", { port }));
