import { type Request, type Response } from "express";
import { type Product, type GetProductsResponse } from "./types.ts";
import log from "./log.ts";
import fs from "fs";

export default (req: Request, res: Response) => {
  log("INFO", "Get Products Request");

  const products: Product[] = JSON.parse(
    fs.readFileSync("products.json", "utf-8"),
  );

  const response: GetProductsResponse = { products };

  res.send(response);
};
