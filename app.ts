import express from "express";
import { Product } from "./types.ts";

const app = express();

const port = process.env.PORT || 3000;

app.get("/products", (req, res) => res.sendStatus(200));

app.post("/orders", (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
