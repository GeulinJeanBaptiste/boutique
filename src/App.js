import React from "react";
import Gallery from "./components/Gallery/Gallery.js";
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import { articles } from "./articles.js";
import { menuentries } from './menuentries.js';
import "./App.css";

const App = () => {

  // panier
  // panier
  // panier

  const [statePanier, setStatePanier] = React.useState(
    {
      displayPanier: false
    }
  );
  const handledisplayPanier = () => {
    setStatePanier({ displayPanier: !statePanier.displayPanier });
  };
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


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
        {<Menu handledisplayPanier={handledisplayPanier}
          sendEntries={menuentries}></Menu>}
        <main>
          {statePanier.displayPanier?<Panier></Panier>:<></>}
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
