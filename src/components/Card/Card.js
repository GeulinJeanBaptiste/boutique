import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      {props.article.name}
      <img
        src={"/assets/img/" + props.article.img}
        alt={props.article.name}
      ></img>
      <p>{props.article.description}</p>
      <p>Quantité: {props.article.qte}</p>
      <p>Prix: {props.article.price}</p>
      <p className="cardBtn">
        <button onClick={() => props.decrementQte(props.article.id)}>
          Buy Now
        </button>
      </p>
    </div>
  );
};

export default Card;
