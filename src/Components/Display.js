import React from 'react'
import { Link } from 'react-router-dom'
const Display = () => {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contacts">Contacts</Link>

    </div>
  )
}

export default Display