import './App.css'
import Game from '../src/components/game.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/game" element={
              <Game />
            }
          />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />

        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
