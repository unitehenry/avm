import { type Request, type Response } from "express";
import {
  type Order,
  type CreateOrderRequest,
  type CreateOrderResponse,
} from "./types.ts";

export default (req: Request, res: Response) => {
  const request: CreateOrderRequest = req.body;

  const order: Order = {
    id: "123",
    checkoutUrl: "https://stripe.com",
  };

  const response: CreateOrderResponse = { order };

  res.send(response);
};
