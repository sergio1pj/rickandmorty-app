import React from "react";
import  Card  from "../Card/index";
import LoadingHOC from "../../hoc/LoadingHOC";
function CardList({ cards }) {
    return (
        React.createElement(
            "div",
            { className: "cards" },
            cards.map((card) => React.createElement(Card, { key: card.id, card: card }))
        )
    );
}
export default LoadingHOC(CardList);
