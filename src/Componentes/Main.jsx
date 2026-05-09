import React from 'react'

const Main = () => {
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

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon bitcoin">BTC</div>
              <div>
                <h3>Bitcoin</h3>
                <span>BTC</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€61,240.00</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="positive">+2.45%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€1.2T</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon ethereum">ETH</div>
              <div>
                <h3>Ethereum</h3>
                <span>ETH</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€3,120.00</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="negative">-1.12%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€375B</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon solana">SOL</div>
              <div>
                <h3>Solana</h3>
                <span>SOL</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€142.35</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="positive">+4.18%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€66B</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon cardano">ADA</div>
              <div>
                <h3>Cardano</h3>
                <span>ADA</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€0.58</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="positive">+0.84%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€20B</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon ripple">XRP</div>
              <div>
                <h3>XRP</h3>
                <span>XRP</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€0.62</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="negative">-0.35%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€34B</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

          <article class="crypto-card">
            <div class="crypto-header">
              <div class="crypto-icon polygon">MATIC</div>
              <div>
                <h3>Polygon</h3>
                <span>MATIC</span>
              </div>
            </div>

            <div class="crypto-info">
              <div>
                <span>Precio</span>
                <strong>€0.91</strong>
              </div>
              <div>
                <span>Variación 24h</span>
                <strong class="positive">+1.76%</strong>
              </div>
              <div>
                <span>Capitalización</span>
                <strong>€8.9B</strong>
              </div>
            </div>
            <a href="#" class="crypto-button">Saber más</a>
          </article>

        </div>
      </div>
    </section>
  </main>
    )
}

export default Main
