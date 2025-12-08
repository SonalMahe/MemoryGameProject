import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'

import Login from './Pages/login.jsx';
import Register from './Pages/register.jsx';
import Game from './Pages/game.jsx'
import Navbar from './Components/Navbar.jsx';




function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element= { <Login />}/>
        <Route path='/login' element= { <Login />}/>
        <Route path='/register' element= { <Register />}/>
        <Route path='/game' element= { <Game />}/>

      </Routes>

    </Router>
      
  )
}

export default App;
