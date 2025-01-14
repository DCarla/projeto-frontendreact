import { AppBox } from "./AppStyle";
import { Filters } from "./Components/Filters/Filter";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { productList } from "./assents/productList";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minfilter, setMinFilter] = useState(0);
  const [maxfilter, setMaxFilter] = useState(null);
  const [searchfilter, setSearchFilter] = useState("");
  useEffect(() => {
    const carrinho = localStorage.getItem("carrinho");
    console.log("carrinho", carrinho);
    if (carrinho) {
      setCart(JSON.parse(carrinho));
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <AppBox>
        <Filters
          filtroMinimo={minfilter}
          filtroMaximo={maxfilter}
          localizaFiltro={searchfilter}
          setFiltroMaximo={setMaxFilter}
          setFiltroMinimo={setMinFilter}
          setLocalizaFiltro={setSearchFilter}
        />

        <Home
          Listadeproduto={productList}
          valorTotal={amount}
          carrinho={cart}
          minfilter={minfilter}
          maxfilter={maxfilter}
          localizaFiltro={searchfilter}
          setCarrinho={setCart}
          setValorTotal={setAmount}
        />
        <Cart
          Listadeproduto={productList}
          valorTotal={amount}
          carrinho={cart}
          setCarrinho={setCart}
          setValorTotal={setAmount}
        />
      </AppBox>
    </>
  );
}

export default App;
