import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [timerActive, setTimerActive] = useState(false);
  const [win, setWin] = useState(false);

}

const difficultyPairs = {
  easy: 6,
  medium: 8,
  hard: 12,
};


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

// Duplicate & Shuffle

const duplicated = [...images, ...images].map((card, index) => ({
  ...card,
  key: index + "-" + card.id,
}));

const shuffled = duplicated.sort(() => Math.random() - 0.5);
setCards(shuffled);



function startGame() {
  setMoves(0);
  setTime(0);
  setFlipped([]);
  setMatched([]);
  setWin(false);
  loadCards();
  setTimerActive(true);
}


useEffect(() => {
  startGame();
}, [difficulty]);


//flip card mapping//

function flipCard(index) {
  if (flipped.length === 2) return;
  if (flipped.includes(index)) return;
  if (matched.includes(cards[index].id)) return;

  const newFlipped = [...flipped, index];
  setFlipped(newFlipped);

  if (newFlipped.length === 2) {
    setMoves((m) => m + 1);

    const [i1, i2] = newFlipped;
    if (cards[i1].id === cards[i2].id) {
      setMatched((prev) => [...prev, cards[i1].id]);

      setFlipped([]);


      if (matched.length + 1 === difficultyPairs[difficulty]) {
        setTimerActive(false);
        saveStats();
        setWin(true);
      }

    } else {
      setTimeout(() => setFlipped([]), 1000);
    }
  }
}


function saveStats() {
  const stats = JSON.parse(localStorage.getItem("stats") || "[]");
  stats.push({
    user: loggedUser,
    mode: difficulty,
    moves,
    time,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("stats", JSON.stringify(stats));
}

function logout() {
  localStorage.removeItem("loggedIn");
  navigate("/login");
}




   return (
    <div className="game-container">

      <h2>Pokémon Memory Game</h2>

    

      <div style={{ marginTop: 10, textAlign: "center" }}>
        <button onClick={() => setDifficulty("easy")}>Easy</button>
        
      </div>


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