import express from "express";
import products from "./products.ts";
import orders from "./orders.ts";
import skill from "./skill.ts";
import log from "./log.ts";

const app = express();

const port = process.env.PORT || 3000;

app.get("/SKILL.md", skill);

app.get("/products", products);

app.post("/orders", orders);

app.listen(port, () => log("INFO", "Server running", { port }));
