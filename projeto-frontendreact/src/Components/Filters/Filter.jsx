import { FiltroCa } from "./filersStyle";

export function Filters({
  filtroMinimo,
  filtroMaximo,
  localizaFiltro,
  setFiltroMaximo,
  setFiltroMinimo,
  setLocalizaFiltro,
}) {
  function handleMudancaFiltroMinimo(event) {
    if (event.target.value < 0) {
      alert("Não pode usar valor negativo");
      setFiltroMinimo(0);
    } else {
      setFiltroMinimo(event.target.value);
    }
  }
  function handleMudancaFiltroMaximo(event) {
    if (event.target.value < 0) {
      alert("Não pode usar valor negativo");
      setFiltroMaximo(0);
    } else {
      setFiltroMaximo(event.target.value);
    }
  }

  function handleLocalizarNome(event) {
    setLocalizaFiltro(event.target.value);
  }

  console.log(localizaFiltro);

  return (
    <FiltroCa>
      <h2>Filtro</h2>
      <label>
        <br />
        Valor minimo:
        <br />
        <input
          type="number"
          value={filtroMinimo}
          onChange={handleMudancaFiltroMinimo}
        />
      </label>
      <label>
        <br />
        Valor maximo:
        <br />
        <input
          type="number"
          value={filtroMaximo}
          onChange={handleMudancaFiltroMaximo}
        />
      </label>
      <label>
        <br />
        Buscar por nome:
        <br />
        <input
          type="text"
          value={localizaFiltro}
          onChange={handleLocalizarNome}
        />
      </label>
    </FiltroCa>
  );
}
