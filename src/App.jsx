import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            <Route
            path="/login" element={ 
                <Login />
            }
          />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
