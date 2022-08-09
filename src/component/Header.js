import React from 'react'
import '../App.css'
function Header() {
  return (
    <header className='header'>
        <div>
            <h1 id='main-title'>Sepetcim</h1>
            <div className='search-bar'>               
                <input type="text" name="" id="search-text"/>
                <label htmlFor="search-text"><i class="fa-solid fa-magnifying-glass fa-xl" id='search-icon'></i></label>
            </div> 
            <p id='createlogin-text'><i class="fa-solid fa-user-plus fa-1x" id='login-icon'></i>Üye Ol</p>
            <p id='login-text'><i class="fa-solid fa-right-to-bracket fa-1x" id='login-icon'></i>Giriş Yap</p>
        </div>
    </header>
    
  )
}

export default Header