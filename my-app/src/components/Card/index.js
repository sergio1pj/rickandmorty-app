import React from "react";
export default function Card({ card }) {
    return (
        React.createElement(
            "div",
            { className: `card_${card.status}` },
            React.createElement("img", {
                src: card.image,
                alt: card.name,
                key: card.id,
            }),
            React.createElement("h2", null, card.name),
            React.createElement("p", null, `Status: ${card.status}`),
            React.createElement("p", null, `Species: ${card.species}`),
            React.createElement("p", null, `Type: ${card.type}`),
            React.createElement(
                "p",
                null,
                `Origin: ${card.origin.name}`,
                React.createElement("br", null),
                `Location: ${card.location.name}`
            )
            
        )
    );
}
