import React from 'react'
//libraries
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/head-tail">Head and Tail</Link></li>
        </ul>
    </div>
  )
}

export default Home