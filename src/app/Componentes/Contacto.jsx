import React from "react";

export default function Contacto() {
  return (
    <main>
      <section class="contact-hero">
        <div class="container">
          <span class="contact-badge">Contacto</span>
          <h1>Estamos aquí para ayudarte</h1>
          <p>
            Si tienes dudas sobre la plataforma, sugerencias de mejora o
            necesitas soporte, puedes contactar con nuestro equipo de forma
            rápida y sencilla.
          </p>
        </div>
      </section>

      <section class="contact-section">
        <div class="container">
          <div class="contact-layout">
            <section class="contact-info-card">
              <div class="section-title">
                <h2>Información de contacto</h2>
                <p>Elige el canal que mejor se adapte a tu consulta.</p>
              </div>

              <div class="contact-info-list">
                <article class="contact-info-item">
                  <div class="contact-icon">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p>contacto@cryptomarket.com</p>
                  </div>
                </article>

                <article class="contact-info-item">
                  <div class="contact-icon">💬</div>
                  <div>
                    <h3>Soporte</h3>
                    <p>Atención de lunes a viernes, de 9:00 a 18:00.</p>
                  </div>
                </article>

                <article class="contact-info-item">
                  <div class="contact-icon">📍</div>
                  <div>
                    <h3>Ubicación</h3>
                    <p>Madrid, España</p>
                  </div>
                </article>

                <article class="contact-info-item">
                  <div class="contact-icon">🔒</div>
                  <div>
                    <h3>Seguridad</h3>
                    <p>
                      No solicitamos claves privadas, contraseñas ni frases
                      semilla.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <section class="contact-form-card">
              <h2>Envíanos un mensaje</h2>
              <p>Completa el formulario y te responderemos lo antes posible.</p>

              <form class="contact-form">
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tuemail@ejemplo.com"
                  />
                </div>

                <div class="form-group">
                  <label for="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Motivo de la consulta"
                  />
                </div>

                <div class="form-group">
                  <label for="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Escribe tu mensaje..."
                  ></textarea>
                </div>

                <button type="submit" class="contact-submit">
                  Enviar mensaje
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section class="faq-section">
        <div class="container">
          <div class="section-title">
            <h2>Preguntas frecuentes</h2>
            <p>Algunas dudas habituales antes de contactar con nosotros.</p>
          </div>

          <div class="faq-grid">
            <article class="faq-card">
              <h3>¿Los precios se actualizan en tiempo real?</h3>
              <p>
                Los datos pueden actualizarse periódicamente dependiendo de la
                API utilizada y de la configuración de la aplicación.
              </p>
            </article>

            <article class="faq-card">
              <h3>¿Puedo sugerir nuevas criptomonedas?</h3>
              <p>
                Sí. Puedes enviarnos tus sugerencias para valorar su inclusión
                en próximos listados.
              </p>
            </article>

            <article class="faq-card">
              <h3>¿Ofrecéis asesoramiento financiero?</h3>
              <p>
                No. Esta plataforma es informativa y no ofrece recomendaciones
                de inversión.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
