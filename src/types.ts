export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Order {
  id: string;
  checkoutUrl: string;
}

export interface GetProductsResponse {
  products: Product[];
}

export interface CreateOrderRequest {
  items: Map<string, number>;
  note: string;
}

export interface CreateOrderResponse {
  order: Order;
}
