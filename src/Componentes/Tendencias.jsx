import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { $previousMarketRoute } from "../stores/navigationStore";

export default function Tendencias() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    ObtenerTop();
  },[]);

  const ObtenerTop = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=price_desc&per_page=10&page=1&sparkline=false";
    const data = await fetch(url, {
      headers: { "x-cg-demo-api-key": "CG-eWwLZJWUKxxEJfrYSfAmYdxA" },
    });
    const json = await data.json();
    setTop(json);
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Top 10 criptomonedas por precio</h1>
          <p>
            Consulta un ranking elegante y actualizado de las criptomonedas con
            mayor precio del mercado.
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
            />
            <button>Buscar</button>
          </div>
        </div>
      </section>

      <section className="top-section">
        <div className="container">
          <div className="section-title">
            <h2>Ranking principal</h2>
            <p>Criptomonedas ordenadas de mayor a menor precio.</p>
          </div>

          <div className="ranking-list">

            
            {top.map((puesto, index) => {
              return (
                <article className="ranking-row ranking-row-first">
                  <div className="ranking-position">
                    <span className="rank-number">{index+1}º</span>
                    {index+1 ===1 ? <span className="trophy trophy-gold">🏆</span> : (index+1 === 2 ? <span className="trophy trophy-silver">🏆</span> : (index+1 === 3 ? <span className="trophy trophy-bronze">🏆</span> : ''))}

                  </div>

                  <div className="crypto-main-info">
                    <img
                      src={puesto?.image}
                      alt="Bitcoin logo"
                      className="crypto-ranking-image"
                    />

                    <div>
                      <h3>{puesto?.name}</h3>
                      <span>{puesto?.symbol?.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="crypto-ranking-price">
                    <span>Precio actual</span>
                    <strong>{puesto?.current_price?.toLocaleString('es-ES')} €</strong>
                  </div>

                  <Link
                    to={"/detalles/" + puesto.id}
                    className="ranking-button"
                    onClick={() =>
                      $previousMarketRoute.set({path: "/tendencias", label: "Tendencias",})}>
                    Saber más
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
