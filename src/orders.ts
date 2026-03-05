import { type Request, type Response } from "express";
import {
  type Order,
  type CreateOrderRequest,
  type CreateOrderResponse,
} from "./types.ts";
import log from "./log.ts";

export default (req: Request, res: Response) => {
  log("INFO", "Create Order", { body: req.body });

  const request: CreateOrderRequest = req.body;

  const order: Order = {
    id: "123",
    checkoutUrl: "https://checkout.stripe.dev/checkout",
  };

  const response: CreateOrderResponse = { order };

  log("INFO", "Create Order Response", { response });

  res.send(response);
};
