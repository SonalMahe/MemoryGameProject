import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'

import Login from './Components/login.jsx';
import  Register from './Components/register.jsx';

function App() {
  

  return (
    <Router>
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
