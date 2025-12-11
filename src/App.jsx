import Register from './components/register.jsx';
import './App.css';
import Login from './components/login.jsx';
import Game from './components/game.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Routes>
        <Route
          path='/game' element={ <Game />}/>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
