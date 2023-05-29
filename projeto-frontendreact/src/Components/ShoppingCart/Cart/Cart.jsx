import { useEffect } from "react";
import { Items } from "../Items/Items";
import { CartCaixa } from "./cartStyle";

export function Cart({ valorTotal, carrinho, setCarrinho, setValorTotal }) {
  function removeItem(id) {
    carrinho.map((produto) => {
      if (produto.id === id && produto.quantidade >= 1) {
        produto.quantidade = produto.quantidade - 1;
        setCarrinho([...carrinho]);
        setValorTotal(valorTotal - produto.valeu);
      }
      if (produto.quantidade === 0) {
        const novoCarrinho = carrinho.filter(
          (produto) => produto.quantidade !== 0
        );
        setCarrinho(novoCarrinho);
      }
    });
  }
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);
  return (
    <>
      <CartCaixa>
        <p>Carrinho</p>
        {carrinho.map((produto) => {
          return (
            <Items
              key={produto.id}
              nome={produto.name}
              valor={(produto.value * produto.quantidade).toFixed(2)}
              quantidade={produto.quantidade}
              imagem={produto.imageUrl}
              id={produto.id}
              removeItem={removeItem}
            />
          );
        })}
        <p>Valor Total: {valorTotal.toFixed(2)} </p>
      </CartCaixa>
    </>
  );
}
//Atualização
