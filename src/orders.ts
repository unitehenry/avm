import { type Request, type Response } from "express";
import {
  type Order,
  type CreateOrderRequest,
  type CreateOrderResponse,
} from "./types.ts";
import stripe from "stripe";
import log from "./log.ts";

export default async (req: Request, res: Response) => {
  log("INFO", "Create Order", { body: req.body });

  const request: CreateOrderRequest = req.body;

  const client = stripe("sk_test_51T7jcmK33cw0QOKNY8i6GJCgZgAKLwp4TaZ6sFi7yH0Sxy1fiiIQLFmyRSz15WB17qQglJs1poiYXzOH7wgCaCnY00Q9L3gaAr");

  const { items } = request.order;

  const lineItems = Object.keys(items).map(key => ({
    price: key,
    quantity: items[key],
  }));

  const success_url = `${req.protocol}://${req.get("host")}/SKILL.md`;

  const session = await client.checkout.sessions.create({
    success_url,
    line_items: lineItems,
    mode: 'payment',
  });

  const order: Order = {
    id: session.id,
    checkoutUrl: session.url,
  };

  const response: CreateOrderResponse = { order };

  log("INFO", "Create Order Response", { response });

  res.send(response);
};
