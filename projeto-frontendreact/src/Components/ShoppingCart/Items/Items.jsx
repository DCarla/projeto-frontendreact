export function Items({ nome, valor, quantidade, imagem, id, removeItem }) {
  return (
    <>
      <p>Nome:{nome}</p>
      <p>Valor:{valor}</p>
      <p>Quantidade:{quantidade}</p>
      <button onClick={() => removeItem(id)}>Remover</button>
    </>
  );
}
