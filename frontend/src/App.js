import React from 'react'
import './App.css'
import Counter from './component/Counter'
import UsingAPIwHooks from './component/UsingAPIwHooks'
import Login from './component/Login';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';
import Navbar from './component/NavbarComponent';
import Dashboard from './component/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Dashboard/>
    
    <Routes>
      <Route element={<PrivateComponent/>}></Route>
      <Route path='/' element={<h1>Hi I am Home Page</h1>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
