import React from 'react';
import './Menu.css';

const Menu = (props) => (
  <div className="Menu">
    {props.Panier((value, index) => {
      return (
        <li
        onClick = {
          value.entry === "Panier" ? props.displayPanierMenu : null
        }
        key = { index }
        >
      { value.entry }
      </li>
      );
    })}
    Menu Component
  </div>
);


export default Menu;
