import express from "express";
import products from "./products.ts";
import orders from "./orders.ts";
import install from "./install.ts";
import skill from "./skill.ts";
import log from "./log.ts";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.set("trust proxy", true);

app.get("/install.sh", install);

app.get("/SKILL.md", skill);

app.get("/products", products);

app.post("/orders", orders);

const server = app.listen(port, () => {
  if (!process.env.STRIPE_API_KEY) {
    log("ERROR", "No stripe api key");

    process.exit(1);
  }

  log("INFO", "Server running", { port });
});

process.on("SIGINT", () => {
  log("INFO", "Received SIGINT, shutting down gracefully...");
  server.close(() => {
    log("INFO", "Server closed");
    process.exit(0);
  });
});
