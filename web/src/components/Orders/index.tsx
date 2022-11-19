import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container, Board, OrdersContainer } from "./styles";

const orders: Order[] = [
  {
    _id: "63769f7c0f92bb5e3449723e",
    table: "123",
    status: "IN_PRODUCTION",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1668717340472-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1668717865726-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
