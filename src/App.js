import React from "react";
import Gallery from "./components/Gallery/Gallery.js";
import { articles } from "./articles.js";
import "./App.css";

const App = () => {
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
