import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeCaixa0, HomeCaixa1, HomeCaixa2 } from "./homeStyled";

export function Home({
  Listadeproduto,
  valorTotal,
  carrinho,
  setCarrinho,
  setValorTotal,
  minfilter,
  maxfilter,
  localizaFiltro,
}) {
  const [ordination, setOrdination] = useState("");

  const listaDeProdutoFiltrada = Listadeproduto.filter(
    (item) => item.value >= minfilter && (item.value <= maxfilter || !maxfilter)
  ).filter((item) => item.name.includes(localizaFiltro));

  console.log(localizaFiltro);

  function hSelect(event) {
    setOrdination(event.target.value);
  }

  function addCart(produto) {
    const novoProduto = carrinho.find(
      (produtoCallBack) => produto.id === produtoCallBack.id
    );
    if (novoProduto === undefined) {
      produto = { ...produto, quantidade: 1 };
      setCarrinho([...carrinho, produto]);

      const vTotal = valorTotal + produto.value;
      setValorTotal(vTotal);
    } else {
      const novoCarrinho = carrinho.map((produto) => {
        if (produto.id === novoProduto.id) {
          const vTotal1 = valorTotal + produto.value;
          setValorTotal(vTotal1);
          return { ...novoProduto, quantidade: produto.quantidade + 1 };
        } else {
          return produto;
        }
      });
      setCarrinho(novoCarrinho);
    }
  }
  console.log("valor total", valorTotal);
  return (
    <>
      <HomeCaixa0>
        <HomeCaixa1>
          <span>Quantidade de produtos:{listaDeProdutoFiltrada.length}</span>
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
          {listaDeProdutoFiltrada.map((produto) => {
            return (
              <ProductCard
                Listadeproduto={produto}
                key={produto.id}
                addCarrinho={addCart}
              />
            );
          })}
        </HomeCaixa2>
      </HomeCaixa0>
    </>
  );
}
