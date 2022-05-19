import React from "react";
import  Card  from "../Card/index";
import LoadingHOC from "../../hoc/LoadingHOC";
function CardList({ cards }) {
    return (
        <div className="cards">
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}
export default LoadingHOC(CardList);