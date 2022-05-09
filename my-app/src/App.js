import { useState, useEffect } from "react";
import React from "react";
import CardList from "./components/CardList";
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
return (
  React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "h1",
      null,
      "Rick and Morty"
    ),
    React.createElement(CardList, {
      cards: data,
      loading: loading,
      error: error,
    }
    )
  )
);
}
