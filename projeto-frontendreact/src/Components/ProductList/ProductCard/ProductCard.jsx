import { CardCaixa, CardTextCaixa } from "./ProductCardStyle";

export function ProductCard({ Listadeproduto, addCarrinho }) {
  // console.log(Listadeproduto);
  return (
    <>
      <CardCaixa>
        <img src={Listadeproduto.imageUrl} />
        <CardTextCaixa>
          <p>{Listadeproduto.name}</p>
          <p>{Listadeproduto.value}</p>
          <button onClick={() => addCarrinho(Listadeproduto)}>
            Adicionar item
          </button>
        </CardTextCaixa>
      </CardCaixa>
    </>
  );
}
