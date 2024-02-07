import React  from 'react'
//import './App.css';
import Home from './pages/Home';
import Create from './components/Create/Create'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element><Home/></Route> */}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          {/* <Route path='/' element><Home/></Route> */}

        </Routes>
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
