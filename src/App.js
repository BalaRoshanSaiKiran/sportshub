import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentsofsecondapp/Navbar'
import Footer from './Componentsofsecondapp/Footer'
import Home from './Componentsofsecondapp/Home'
import './App.css'
import Header from './Componentsofsecondapp/Header'
import About from './Componentsofsecondapp/About'
import Kabaddi from './Componentsofsecondapp/Kabaddi'
import Badminton from './Componentsofsecondapp/Badminton'
import Cricket from './Componentsofsecondapp/Cricket';
import TableTennis from './Componentsofsecondapp/TableTennis';
import VolleyBall from './Componentsofsecondapp/VolleyBall';
import BasketBall from './Componentsofsecondapp/BasketBall';
import ToDoList from './Componentsofsecondapp/ToDoList';
const App = () => {
  return (
    <>
      <div id="App-main-div">
      <Navbar/>
      <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Kabaddi" element={<Kabaddi/>} />
          <Route path="/Badminton" element={<Badminton/>} />
          <Route path="/Cricket" element={<Cricket/>} />
          <Route path="/Tabletennis" element={<TableTennis/>} />
          <Route path="/VolleyBall" element={<VolleyBall/>} />
          <Route path="/BasketBall" element={<BasketBall/>} />
          <Route path="/ToDoList" element={<ToDoList/>} />
        </Routes>
      </div>
    </Router>
        <div id="App-main-div2">
          <Home/>
          <About/>
       </div>
        <Footer/>
       </div>
    </>
  )
}

export default App