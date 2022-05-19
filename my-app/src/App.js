import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";  
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
  //exibir cards ou error ou loading
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <CardList cards={data} />
      )}
    </Router>
  );
}
