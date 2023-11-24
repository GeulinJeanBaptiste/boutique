import React from "react";
import Gallery from "./components/Gallery/Gallery.js";
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import { articles } from "./articles.js";
import "./App.css";

const App = () => {
  const [statePanier, setStatePanier] = React.useState(
    {
      displayPanier: false
    }
  );
  const displayPanierMenu = () => {
    setStatePanier({ displayPanier: !statePanier.displayPanier });
  };

  const [state, setState] = React.useState({
    articles: articles,
  });
  const decrementQte = (id) => {
    // state.articles[id].qte--;
    // Option 1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        articles: articlesTmp,
      });
    }
    // Option 2 : .....Lundi
  };
  return (
    <>
      <header>
        {<Menu Panier={Panier} displayPanierMenu={displayPanierMenu}></Menu>}
        <main>
          <Gallery
            articles={state.articles}
            decrementQte={decrementQte}
          ></Gallery>
        </main>
      </header>
    </>
  );
};

export default App;
