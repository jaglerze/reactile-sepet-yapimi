import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <div className="dropdown">
            <button className="dropbtn">Erkek Giyim</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Kadın Giyim</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Çocuk Giyim</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Elektronik</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Hobi</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Petshop</button>
            <div className="dropdown-content">
                <a href="#">********</a>
                <a href="#">********</a>
                <a href="#">********</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar