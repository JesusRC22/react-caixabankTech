import React from 'react'
import { Link } from 'react-router-dom'

    const Header = () => {
    return (
  <header className="header">
    <div className="container header-content">
      <div className="logo">
        <Link to='/' className="logo-icon">₿</Link>
        <Link to='/'>CryptoMarket</Link>
      </div>

      <nav className="nav">
        <Link to="/">Mercado</Link>
        <a href="#">Tendencias</a>
        <a href="#">Noticias</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  </header>
    )
}

export default Header
