import { useState, useEffect } from "react";
import

  function Game() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [time, setTime] =useState(0);
    const [difficulty, setDifficulty]= useState("easy");
  }

// Timer //

useEffect(() => {
  let interval;
  if (timerActive) {
    interval = setInterval(() => setTime((t) => t + 1), 1000);
  }
  return () => clearInterval(interval);
}, [timerActive]);

//fetch data from POKEMON API
async function loadCards() {
  const pairCount = difficultyPairs[difficulty];

  const images = [];
  for (let i = 1; i <= pairCount; i++) {
    const pokeId = Math.floor(Math.random() * 151) + 1; // Gen 1 Pokémon

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const data = await response.json();

    images.push({
      id: i,
      image: data.sprites.other["official-artwork"].front_default,
    });
  }
}

return (
  <div
    key={card.key}
    className={`card ${isFlipped ? "flipped" : ""}`}
    onClick={() => flipCard(index)}
  >
    <div className="card-face front">
      <img src={card.image} alt="pokemon" style={{ width: "80%" }} />
    </div>
    <div className="card-face back"></div>
  </div>
);










export default Game()