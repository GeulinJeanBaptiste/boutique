import React from 'react';
import Achat from "../Achat/Achat"
import './Panier.css';

const Panier = (props) => {
  return (
    <div className='backgroundPanier'>
      <div className="Panier">
        <div className='PanierClose'>
          <div className='close' onClick={props.handledisplayPanier}>x</div>
          <h2>panier</h2>
        </div>
        {
          props.achat.map((value, index) =>
            <Achat item={value} key={index}></Achat>)
        }
      </div>
    </div>
  );
};


export default Panier;
