import { type Request, type Response } from "express";
import { type Product, type GetProductsResponse } from "./types.ts";
import Stripe from "stripe";
import log from "./log.ts";
import fs from "fs";

export default async (req: Request, res: Response) => {
  log("INFO", "Get Products Request");

  const client = new Stripe(process.env.STRIPE_API_KEY);

  log("INFO", "Getting stripe products");

  const stripeProducts = await client.products.list({
    expand: ["data.default_price"],
  });

  const products = stripeProducts.data.map((product) => ({
    id:
      typeof product.default_price === "string"
        ? product.default_price
        : product.default_price.id,
    name: product.name,
    description: product.description,
    price:
      typeof product.default_price === "string"
        ? 1
        : product.default_price.unit_amount / 100,
  }));

  log("INFO", "Stripe returned products", { products });

  res.send({ products });
};
