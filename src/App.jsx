import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from '/components/Game';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


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
