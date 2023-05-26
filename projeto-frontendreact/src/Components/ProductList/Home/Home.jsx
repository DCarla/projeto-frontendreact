import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeCaixa0, HomeCaixa1, HomeCaixa2 } from "./homeStyled";

export function Home({
  Listadeproduto,
  valorTotal,
  carrinho,
  setCarrinho,
  setValorTotal,
}) {
  const [ordination, setOrdination] = useState("");

  function hSelect(event) {
    setOrdination(event.target.value);
  }

  return (
    <>
      <HomeCaixa0>
        <HomeCaixa1>
          <span>Quantidade de produtos:{Listadeproduto.length}</span>
          <span>
            Ordenação:
            <select value={ordination} onChange={hSelect}>
              <option> </option>
              <option>Crecente </option>
              <option>Decrecente</option>
            </select>
          </span>
        </HomeCaixa1>

        <HomeCaixa2>
          <ProductCard Listadeproduto={Listadeproduto[0]} />
          <ProductCard Listadeproduto={Listadeproduto[1]} />
          <ProductCard Listadeproduto={Listadeproduto[2]} />
        </HomeCaixa2>
      </HomeCaixa0>
    </>
  );
}
