import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetallesCrypto() {
    
    let [detalles,setDetalles]=useState({})
    const {id}=useParams()

    async function ObtenerDetallesCrypto (){
        const urlDescription='https://api.coingecko.com/api/v3/coins/'+id+'?localization=false&tickers=false&market_data=true'
        const response= await fetch(urlDescription,{
            headers:{
                'x-cg-demo-api-key': 'CG-eWwLZJWUKxxEJfrYSfAmYdxA'
            }
        })
        const json = await response.json()
        console.log(id)
        setDetalles(json)
    }

    useEffect(()=>{
        ObtenerDetallesCrypto()
    },[])
    
    
    return (
    <main>
        {/* <p>{detalles?.image?.small}</p> */}
    <section class="detail-hero">
      <div class="container">
        <Link to="/" class="back-link"> ← Volver al mercado</Link>

        <div class="detail-hero-content">
          <div class="detail-crypto-main">
            <img 
              class="detail-crypto-image"
              src={detalles?.image?.small}
              alt="Bitcoin logo"
            />

            <div>
              <span class="detail-symbol">{detalles?.symbol?.toUpperCase()}</span>
              <h1>{detalles?.id?.[0]?.toUpperCase()}{detalles?.id?.slice(1,)}</h1>
              <a href={detalles?.links?.homepage[0]}>
                {detalles?.links?.homepage[0]}
              </a>
            </div>
          </div>

          <div class="detail-price-card">
            <span>Precio actual</span>
            <strong>{detalles?.market_data?.current_price?.usd.toLocaleString('us-US')} USD</strong>
            <small>Actualizado recientemente</small>
          </div>
        </div>
      </div>
    </section>

    <section class="crypto-detail-section">
      <div class="container">

        <div class="detail-layout">

          <section class="detail-main-card">
            <div class="detail-section-title">
              <h2>Información general</h2>
              <p>Datos principales de la criptomoneda seleccionada.</p>
            </div>

            <p class="crypto-description">
              {detalles?.description?.en}
            </p>

            <a 
              href="https://bitcoin.org"
              target="_blank"
              rel="noopener noreferrer"
              class="official-link"
            >
              Visitar página oficial
            </a>
          </section>

          <aside class="detail-side-card">
            <h2>Sentimiento de mercado</h2>

            <div class="sentiment-box">
              <div class="sentiment-item positive-sentiment">
                <span class="sentiment-icon">👍</span>
                <div>
                  <strong>{detalles?.sentiment_votes_up_percentage}%</strong>
                  <span>Les gusta</span>
                </div>
              </div>

              <div class="sentiment-item negative-sentiment">
                <span class="sentiment-icon">👎</span>
                <div>
                  <strong>{detalles?.sentiment_votes_up_percentage}</strong>
                  <span>No les gusta</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

        <section class="stats-section">
          <div class="section-title">
            <h2>Datos de mercado</h2>
            <p>Resumen financiero y técnico de la criptomoneda.</p>
          </div>

          <div class="stats-grid">

            <article class="stat-card">
              <span>Precio en dólares</span>
              <strong>{detalles?.market_data?.current_price?.usd.toLocaleString('us-US')} USD</strong>
            </article>

            <article class="stat-card">
              <span>Precio en euros</span>
              <strong>{detalles?.market_data?.current_price?.eur.toLocaleString('es-ES')} EUR</strong>
            </article>

            <article class="stat-card">
              <span>Precio en libras</span>
              <strong>{detalles?.market_data?.current_price?.eur.toLocaleString('en-EN')} GBP</strong>
            </article>

            <article class="stat-card">
              <span>Total amortización</span>
              <strong>21,000,000 BTC</strong>
            </article>

            <article class="stat-card">
              <span>Diferencia de precio 24h</span>
              <strong class="positive">{detalles?.market_data?.market_cap_change_24h_in_currency?.eur.toLocaleString('es-ES')}</strong>
            </article>

            <article class="stat-card">
              <span>Diferencia porcentual 24h</span>
              <strong class="positive">{detalles?.market_data?.market_cap_change_percentage_24h_in_currency?.eur.toFixed(2)}%</strong>
            </article>

            <article class="stat-card">
              <span>Fecha de creación</span>
              <strong>{detalles?.genesis_date}</strong>
            </article>

          </div>
        </section>

      </div>
    </section>

  </main>
    )
}