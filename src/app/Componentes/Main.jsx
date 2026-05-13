import { $previousMarketRoute } from "../stores/navigationStore"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router"
const Main = () => {
    
    
    
    let [coins,setCoins]=useState([])
    let [search, setSearch]= useState('')
    let [filtro, setFiltro]=useState('')
    
    async function obtenerDatos() {
        const url= 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false'
        const response= await fetch(url,{
          headers:{'x-cg-demo-api-key': 'CG-eWwLZJWUKxxEJfrYSfAmYdxA'}
        })
        const json= await response.json()
        setCoins(json)
    }

const coinsFiltro = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filtro.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(filtro.toLowerCase())
})

    const buscarCrypto=()=>{setFiltro(search)}


    useEffect(()=>{
        obtenerDatos()
    },[filtro])    
    
    
    
    return (
    <main>
    <section className="hero">
      <div className="container">
        <h1>Explora el mercado de criptomonedas</h1>
        <p>
          Consulta información básica, precios y evolución de las principales criptomonedas del mercado.
        </p>
      </div>
    </section>

    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Buscar criptomoneda..." 
            aria-label="Buscar criptomoneda"
            value= {search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={buscarCrypto}>Buscar</button>
        </div>
      </div>
    </section>

    <section className="crypto-section">
      <div className="container">
        <div className="section-title">
          <h2>Criptomonedas destacadas</h2>
          <p>Listado inicial de activos digitales populares.</p>
        </div>

        <div className="crypto-grid">


{coinsFiltro.map((coin)=>{
    return(
        <article className="crypto-card" key={coin.id}>
            <div className="crypto-header">
              <img className="crypto-icon" src={coin.image} alt="Bitcoin logo"/>
              <div>
                <h3>{coin.name}</h3>
                <span>{coin.symbol.toUpperCase()}</span>
              </div>
            </div>

            <div className="crypto-info">
              <div>
                <span>Precio</span>
                <strong>{coin.current_price.toLocaleString('es-ES')}€</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong className="positive">{(coin.high_24h - coin.low_24h).toLocaleString('es-Es')}€</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>{coin.market_cap.toLocaleString('es-Es')}€</strong>
              </div>
            </div>
            <Link to= {'/detalles/'+coin.id} className="crypto-button"   onClick={() =>$previousMarketRoute.set({path: "/",label: "Mercado"})
  }>Saber más</Link>
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
