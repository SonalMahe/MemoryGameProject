import { useState, useEffect } from "react";
import Logout from "../components/logout.jsx";
const flipSound = new Audio("/sound/CardFlip.wav");
const matchSound = new Audio("/sound/CardMatch.wav");
const winSound = new Audio("/sound/gameWin.wav");


function Game() {

  const loggedUser = localStorage.getItem("loggedIn");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [timerActive, setTimerActive] = useState(false);
  const [win, setWin] = useState(false);

  const difficultyPairs = {
    easy: 6,
    medium: 8,
    hard: 10,
  };

  // Timer //

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);


  //fetch data from POKEMON API and set Cards//
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


    // Duplicate & Shuffle & Set//

    const duplicated = [...images, ...images].map((card, index) => ({
      ...card,
      key: index + "-" + card.id,
    }));

    const shuffled = duplicated.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }

  //Start New Game //
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


  //flip card logic//

  function flipCard(index) {
    if (flipped.length === 2) return;
    if (flipped.includes(index)) return;
    if (matched.includes(cards[index].id)) return;

    flipSound.currentTime = 0;
    flipSound.play();

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);

      const [i1, i2] = newFlipped;
      if (cards[i1].id === cards[i2].id) {
        matchSound.currentTime = 0;
        matchSound.play();
        setMatched((prev) => [...prev, cards[i1].id]);

        setFlipped([]);


        if (matched.length + 1 === difficultyPairs[difficulty]) {
          setTimerActive(false);
          saveStats();
          setWin(true);
          winSound.currentTime = 0;
          winSound.play();
        }

      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  }

  //Save Score//
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



  return (
    <div className="game-container">

      <h2>Pokémon Memory Game
        <img className="adjust" src="/src/assets/pikachu.png" alt="pikachu" /> </h2>

      <div style={{ marginTop: 10, textAlign: "center" }}>
        <button onClick={() => setDifficulty("easy")}>Easy</button>
        <button onClick={() => setDifficulty("medium")}>Medium</button>
        <button onClick={() => setDifficulty("hard")}>Hard</button>
      </div>


      <div className="scoreboard">
        <span>Moves: {moves}</span>
        <span>Time: {time}s</span>
      </div>


      <div className={`grid ${difficulty}`}>
        {cards.map((card, index) => {
          const isFlipped =
            flipped.includes(index) || matched.includes(card.id);


          return (
            <div
              key={card.key}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => flipCard(index)}
            >

              <div className="card-face front">
                <img src={card.image} alt="pokemon" style={{ width: "80%" }} />
              </div>

              <div className="card-face back">
                <img
                  src="/pokemon_card.png" alt="pokeball" className="back-img"
                />
              </div>
            </div>
          );
        })}
      </div>

      {win && (
        <div className="win-banner">
          YOU WON!
          <br />
          Moves: {moves} | Time: {time}
          <br />
          <button onClick={startGame} style={{ marginTop: 10 }}>
            Play Again
          </button>
        </div>
      )}

      <Logout />
    </div>
  );

}



export default Game;

