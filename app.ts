import express from "express";
import { type Product } from "./types.ts";

function log(
  level: "INFO" | "WARN" | "ERROR",
  message?: string,
  data?: Record<string, any>,
) {
  console.log(
    JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      message,
      ...data,
    }),
  );
}

const app = express();

const port = process.env.PORT || 3000;

app.get("/products", (req, res) => res.sendStatus(200));

app.post("/orders", (req, res) => res.sendStatus(200));

app.listen(port, () => log(`Server running on port ${port}`));
