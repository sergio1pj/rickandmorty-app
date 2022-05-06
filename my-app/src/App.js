import { useState, useEffect } from "react";
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
return(
  <div className="App">
    <h1>Rick and Morty</h1>
    <div className="cards">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.map((card) => (
          <div className={`card_${card.status}`}>
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>Status: {card.status}</p>
            <p>Species: {card.species}</p>
            <p>Type: {card.type}</p>
            <p>
              Origin: {card.origin.name}
              <br />
              Location: {card.location.name}
            </p>
          </div>
        ))
      )}
    </div>
  </div>
);
}
