import React from 'react';
import './Panier.css';

const Panier = (props) => {
  return (
    <div className='backgroundPanier'>
      <div className="Panier">
        <div className='close' onClick={props.handledisplayPanier}>x</div>
        <h2>panier</h2>
      </div>
    </div>
  );
};


export default Panier;
