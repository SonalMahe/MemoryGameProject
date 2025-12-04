import React , {useState, useEffect} from "react";
import axios from "axios";

function Game(){
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    
    

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