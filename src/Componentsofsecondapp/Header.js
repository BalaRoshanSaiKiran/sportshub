import React from 'react'
import './CSS/Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='combined'>
    <div id="Header-main-div">
            <ul id="Header-ul">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Kabaddi">Kabaddi</Link></li>
                <li><Link to="/Badminton">Badminton</Link></li>
                <li><Link to="/Cricket">Cricket</Link></li>
                <li><Link to="/tableTennis">TableTennis</Link></li>
                <li><Link to="/VolleyBall">VolleyBall</Link></li>
                <li><Link to="/BasketBall">BasketBall</Link></li>
                <li><Link to="/ToDoList">Updates</Link></li>
            </ul>
            </div>
    </div>
  )
}

export default Header