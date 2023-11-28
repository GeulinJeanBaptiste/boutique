import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <h3>{props.article.name}</h3>
      <img
        src={"/assets/img/" + props.article.img}
        alt={props.article.name}
      ></img>
      <p>{props.article.description}</p>
      <p>Quantité: {props.article.qte}</p>
      <p className="PriceCard">Prix: {props.article.price} €</p>
      <p className="cardBtn">
        <button onClick={() => props.decrementQte(props.article.id)}>
          Buy Now
        </button>
      </p>
    </div>
  );
};

export default Card;
