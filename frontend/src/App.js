import React from 'react'
import './App.css'
import Counter from './component/Counter'
import UsingAPIwHooks from './component/UsingAPIwHooks'
import Login from './component/Login';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Signup from './component/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
