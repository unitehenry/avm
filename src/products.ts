import { type Request, type Response } from "express";
import { type Product, type GetProductsResponse } from "./types.ts";
import Stripe from "stripe";
import log from "./log.ts";
import fs from "fs";

export default async (req: Request, res: Response) => {
  log("INFO", "Get Products Request");

  const client = new Stripe("sk_test_51T7jcmK33cw0QOKNY8i6GJCgZgAKLwp4TaZ6sFi7yH0Sxy1fiiIQLFmyRSz15WB17qQglJs1poiYXzOH7wgCaCnY00Q9L3gaAr");

  log("INFO", "Getting stripe products");;

  const stripeProducts = await client.products.list({ expand: [ 'data.default_price' ] });

  const products = stripeProducts.data.map(product => ({
    id: product.default_price.id,
    name: product.name,
    description: product.description,
    price: product.default_price.unit_amount / 100
  }));

  log("INFO", "Stripe returned products", { products });

  res.send({ products });
};
