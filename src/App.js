import React from "react";
import Gallery from "./components/Gallery/Gallery.js";
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import { articles } from "./articles.js";
import { menuentries } from './menuentries.js';
import BoutiqueContext from "./contexts/BoutiqueContext.js"
import "./App.css";





const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles,
      'achat': [],
    }
  );


  const [statePanier, setStatePanier] = React.useState(
    {
      displayPanier: false
    }
  );
  const handledisplayPanier = () => {
    setStatePanier({ displayPanier: !statePanier.displayPanier });
  };


  const decrementQte = (id) => {
    // state.articles[id].qte--;
    // Option 1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        // spread operator option 2 
        'achat': [...state.achat, id]
      });
    }
    // Option 2 : .....Lundi
  };
  return (
    <BoutiqueContext.Provider value={state}>
      <header>
        {<Menu handledisplayPanier={handledisplayPanier}
          sendEntries={menuentries}></Menu>}
        <main>
          {statePanier.displayPanier ?
            <Panier
              handledisplayPanier={handledisplayPanier}
              achat={state.achat}>
            </Panier> : <></>}
          <Gallery
            articles={state.articles}
            decrementQte={decrementQte}
          ></Gallery>
        </main>
      </header>
    </BoutiqueContext.Provider>
  );
};

export default App;
