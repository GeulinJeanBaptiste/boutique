import { useContext } from "react";
import React from 'react';
import Achat from "../Achat/Achat"
import './Panier.css';
import BoutiqueContext from '../../contexts/BoutiqueContext';

const Panier = (props) => {
  const boutiqueContext = useContext(BoutiqueContext);
  let total = 0;
  return (
    <div className='backgroundPanier'>
      <div className="Panier">
        <div className='PanierClose'>
          <div className='close' onClick={props.handledisplayPanier}>x</div>
          <h2>panier</h2>
        </div>
        {
          props.achat.map(
            (value, index) => {
              total += boutiqueContext.articles[value.idachat].price * value.qteachat;
              return (<Achat item={value} key={index}></Achat>)
            })
        }
      </div>
      <div>Total: {total}€</div>
    </div>
  );
};


export default Panier;
