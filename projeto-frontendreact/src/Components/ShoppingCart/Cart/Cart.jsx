import { Items } from "../Items/Items";
import { CartCaixa } from "./cartStyle";

export function Cart({ valorTotal, carrinho, setCarrinho, setValorTotal }) {
  return (
    <>
      <CartCaixa>
        <p>Cart</p>
        <Items />
      </CartCaixa>
    </>
  );
}
