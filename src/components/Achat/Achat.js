import React from 'react';
import './Achat.css';
import BoutiqueContext from '../../contexts/BoutiqueContext';

const Achat = (props) => {
  let id = props.item.idachat;
  const boutiqueContext = React.useContext(BoutiqueContext)
  let article = boutiqueContext.articles[id]
  return (
    <div id='AchatPanier'>
      <span className='Panierimg'><img src={"/assets/img/" + article.img}></img></span>
      <span className='Paniername'><h3>{article.name}</h3></span>
      <span className='PanierBtn'>-</span>
      <span className> {props.item.qteachat}</span>
      <span className='PanierBtn' onClick={() => boutiqueContext.decrementQte(id)}>+</span>
      <span className='Panierprice'> {article.price}€</span>
    </div>
  )
}

export default Achat;
