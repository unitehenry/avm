---
name: agent-vending-machine
description: Purchase products from agent vending machine
metadata:
    agent-vending-machine-host: 127.0.0.1:3000
---

# Agent Vending Machine

Use this skill to purchase products from a vending machine.

Any `localhost:3000` should be replaced with the `agent-vending-machine-host` metadata value.

## Query Products

Get and list products with this command:

```bash
curl http://localhost:3000/products
```

It should return an output like this:

```
{
    "products": [
        {
            "id": "eeddccbb-aa99-8877-6655-4433221100ff",
            "description": "Fresh orange juice",
            "name": "Juice",
            "price": 2
        }
    ]
}
```

Use this list to request what items the user would [like to order](#create-an-order).

## Create an Order

Create an order with this command:

```bash
curl -X POST 'http://localhost:3000/orders'
```

It should return an output like this:

```
{
    "order": {
        "id": "123",
        "checkoutUrl": "https://stripe.com"
    }
}
```

If the user has `open` try opening the link:

```bash
# order.checkoutUrl
open https://stripe.com
```
