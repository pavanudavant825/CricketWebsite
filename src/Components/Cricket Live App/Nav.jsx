import React from 'react'
import './CricketLiveApp.css'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div>
    <nav>
        <label className='logo'>Crick8</label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Series">Series</Link></li>
            {/* <li><Link to="/Matches">Matches</Link></li> */}
            <li><Link to="/About">About</Link></li>
            {/* <li><Link to="/Feedback">Feedback</Link></li> */}
        </ul>
    </nav>
    </div>
    </>
  )
}

export default Nav