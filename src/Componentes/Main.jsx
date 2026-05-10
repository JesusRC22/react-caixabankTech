import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    
    
    
    let [coins,setCoins]=useState([])
    
    async function obtenerDatos() {
        const url= 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
        const response= await fetch(url)
        const json= await response.json()
        setCoins(json)
    }


    useEffect(()=>{
        obtenerDatos()
    },[])    
    
    
    
    return (
    <main>
    <section class="hero">
      <div class="container">
        <h1>Explora el mercado de criptomonedas</h1>
        <p>
          Consulta información básica, precios y evolución de las principales criptomonedas del mercado.
        </p>
      </div>
    </section>

    <section class="search-section">
      <div class="container">
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Buscar criptomoneda..." 
            aria-label="Buscar criptomoneda"
          />
          <button>Buscar</button>
        </div>
      </div>
    </section>

    <section class="crypto-section">
      <div class="container">
        <div class="section-title">
          <h2>Criptomonedas destacadas</h2>
          <p>Listado inicial de activos digitales populares.</p>
        </div>

        <div class="crypto-grid">


{coins.map((coin)=>{
    return(
        <article class="crypto-card">
            <div class="crypto-header">
              <img class="crypto-icon" src={coin.image} alt="Bitcoin logo"/>
              <div>
                <h3>{coin.name}</h3>
                <span>{coin.symbol.toUpperCase()}</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>{coin.current_price.toLocaleString('es-ES')}€</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="positive">{(coin.high_24h - coin.low_24h).toLocaleString('es-Es')}€</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>{coin.market_cap.toLocaleString('es-Es')}€</strong>
              </div>
            </div>
            <Link to= {'/detalles/'+coin.id} class="crypto-button">Saber más</Link>
          </article>
    )
    })}
        </div>
      </div>
    </section>
  </main>
    )
}

export default Main
