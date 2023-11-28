import React from "react";
import Gallery from "./components/Gallery/Gallery.js";
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import { articles } from "./articles.js";
import { menuentries } from './menuentries.js';
import BoutiqueContext from "./contexts/BoutiqueContext.js"
import Footer from "./components/Footer/Footer.js"
import "./App.css";

const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles,
      'achat': []
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
    // Je déclare un tableau vide pour enregistrer mes achats.
    let achatTmp = [];
    // Je déclare une bolean pour arreter ma boucle si le id === value.idachat.
    // Si il existe dans mon tableau achat un article avec le même id (déjà acheté).
    let stop = false;
    // une condition pour determiner si mon tableau est achat est vide.
    if (state.achat.length > 0) {
      // je lance une boucle map qui pourra retourner une copie de state.achat dans achatTmp.
      achatTmp = state.achat.map((value) => {
        // si le résultat est positif
        if (value.idachat === id) {
          // J'incrémente la qte de article acheté.
          value.qteachat++
          // J'empeche l'ajout d'un nouvel article à mon achatTmp
          stop = true
        }
        return value
      })
    }
    // si stop est resté à false (ma bouclen'a pas trouvé de résultat positif)
    if (!stop) {
      // j'ajoute un nouvel article à mon tableau achatTmp.
      achatTmp = [...achatTmp, { 'idachat': id, 'qteachat': 1 }];
    }
    // state.articles[id].qte--;
    // Option 1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        // spread operator option 2 
        'achat': achatTmp
      });
    }
    // Option 2 : .....Lundi
  };
  return (
    <BoutiqueContext.Provider value={{ ...state, 'decrementQte': decrementQte }}>
      <header>
        {<Menu handledisplayPanier={handledisplayPanier}
          sendEntries={menuentries}></Menu>}
        <main id="main">
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
      <footer><Footer></Footer></footer>
    </BoutiqueContext.Provider>
  );
};

export default App;

