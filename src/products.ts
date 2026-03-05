import { type Request, type Response } from "express";
import { type Product, type GetProductsResponse } from "./types.ts";
import fs from "fs";

export default (req: Request, res: Response) => {
  const products: Product[] = JSON.parse(
    fs.readFileSync("products.json", "utf-8"),
  );

  const response: GetProductsResponse = { products };

  res.send(response);
};
