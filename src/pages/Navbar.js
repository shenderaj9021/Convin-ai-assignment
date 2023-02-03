import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className="flex flex-row flex-nowrap justify-end content-around bg-indigo-700 py-6">
          <li className="m-auto"><Link to="/"> Home</Link></li>
          <li className="m-auto"><Link to="/student">  Student details</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
