import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    number: '01',
    tone: 'green',
    eyebrow: 'Registra',
    title: 'Foto, voz o texto',
    copy: 'Añade una comida como te resulte más natural y revisa siempre el resultado antes de guardarlo.',
    icon: 'camera',
  },
  {
    number: '02',
    tone: 'blue',
    eyebrow: 'Comprende',
    title: 'Tu día, de un vistazo',
    copy: 'Calorías, macronutrientes y progreso en una vista clara, sin convertir comer bien en una hoja de cálculo.',
    icon: 'chart',
  },
  {
    number: '03',
    tone: 'orange',
    eyebrow: 'Aprende',
    title: 'Consejos con contexto',
    copy: 'Una biblioteca práctica explica qué hacen las proteínas, los hidratos, las grasas y otros nutrientes.',
    icon: 'book',
  },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === 'camera') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 16h7l3-5h10l3 5h7a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" />
        <circle cx="24" cy="28" r="8" />
      </svg>
    );
  }
  if (type === 'chart') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 39V24h7v15H8Zm13 0V10h7v29h-7Zm13 0V18h7v21h-7Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 10.5A5.5 5.5 0 0 1 12.5 5H22a6 6 0 0 1 6 6v29a6 6 0 0 0-6-6h-9.5A5.5 5.5 0 0 0 7 39.5v-29Zm34 0A5.5 5.5 0 0 0 35.5 5H30a6 6 0 0 0-2 11.66V40a6 6 0 0 1 6-6h1.5a5.5 5.5 0 0 1 5.5 5.5v-29Z" />
    </svg>
  );
}

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Nutrición Inteligente, inicio">
      <span className="brand-mark">
        <Image src="/marca-brote-sereno.png" alt="" width={54} height={54} priority />
      </span>
      <span>Nutrición Inteligente</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav aria-label="Navegación principal">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="/aprende">Aprende</a>
            <a href="/soporte">Soporte</a>
          </nav>
          <a className="header-cta" href="/beta">Acceso beta</a>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="status-pill"><span /> Beta cerrada para Android</div>
            <p className="kicker">Hoy vamos paso a paso.</p>
            <h1>Entiende lo que comes, <em>sin complicarlo.</em></h1>
            <p className="hero-lead">
              Registra tus comidas, observa tu progreso y aprende a tomar decisiones con más contexto.
              Todo en una experiencia sencilla, humana y respetuosa con tus datos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#como-funciona">Descubrir la aplicación <span>→</span></a>
              <a className="button button-secondary" href="/soporte">Ir al centro de ayuda</a>
            </div>
            <div className="trust-row" aria-label="Compromisos del producto">
              <span>✓ Sin publicidad</span>
              <span>✓ Tus registros, bajo control</span>
              <span>✓ Revisión antes de guardar</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Resumen visual de la aplicación">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="phone-card">
              <div className="phone-top">
                <span className="mini-brand"><Image src="/marca-brote-sereno.png" alt="" width={38} height={38} /></span>
                <span><small>Buenos días</small><strong>Tu día nutricional</strong></span>
                <span className="avatar">E</span>
              </div>
              <div className="energy-card">
                <div><small>Consumidas</small><strong>1.420</strong><span>kcal</span></div>
                <div className="energy-ring"><span>68%</span></div>
              </div>
              <div className="macro-row">
                <span><i className="dot protein" />Proteína<strong>82 g</strong></span>
                <span><i className="dot carbs" />Hidratos<strong>146 g</strong></span>
                <span><i className="dot fats" />Grasas<strong>48 g</strong></span>
              </div>
              <div className="meal-card">
                <span className="meal-art">🥗</span>
                <span><small>13:45</small><strong>Ensalada completa</strong><em>Una comida · 520 kcal</em></span>
              </div>
              <div className="register-bar"><b>＋</b><strong>Registrar comida</strong><b>→</b></div>
            </div>
            <div className="floating-card floating-camera"><span>📷</span><div><small>Registrar con</small><strong>una foto</strong></div></div>
            <div className="floating-card floating-aida"><span>🌱</span><div><small>Aida te ayuda</small><strong>con contexto</strong></div></div>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="shell principle-grid">
          <div><strong>Simple por fuera</strong><span>Una interfaz para todos los públicos.</span></div>
          <div><strong>Potente por dentro</strong><span>IA, voz y datos trabajando en segundo plano.</span></div>
          <div><strong>Privacidad por diseño</strong><span>Las claves técnicas permanecen fuera del móvil.</span></div>
        </div>
      </section>

      <section className="section shell" id="como-funciona">
        <div className="section-heading">
          <div><p className="eyebrow">Cómo funciona</p><h2>Menos fricción. Más claridad.</h2></div>
          <p>La tecnología está para quitarte trabajo, no para añadirte otra obligación.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.number} className={`feature-card ${feature.tone}`}>
              <div className="feature-top"><span className="feature-number">{feature.number}</span><span className="feature-icon"><FeatureIcon type={feature.icon} /></span></div>
              <p>{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <div className="feature-illustration" aria-hidden="true"><span /><span /><span /></div>
              <p className="feature-copy">{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aida-section">
        <div className="shell aida-grid">
          <div className="aida-mark">A<span>✦</span></div>
          <div>
            <p className="eyebrow">Tu asistente nutricional</p>
            <h2>Aida convierte datos en explicaciones útiles.</h2>
            <p>No sustituye a un profesional sanitario. Te ayuda a entender tus registros, ordenar ideas y avanzar con recomendaciones prudentes.</p>
          </div>
          <a className="button button-light" href="/aprende">Explorar la biblioteca <span>→</span></a>
        </div>
      </section>

      <section className="section shell support-cta">
        <div>
          <p className="eyebrow">Estamos para ayudarte</p>
          <h2>¿Tienes una duda o algo no funciona?</h2>
          <p>Consulta las respuestas rápidas, revisa permisos o escríbenos desde el centro de soporte oficial.</p>
        </div>
        <a className="button button-primary" href="/soporte">Abrir soporte <span>→</span></a>
      </section>

      <footer>
        <div className="shell footer-grid">
          <Brand />
          <p>Seguimiento nutricional sencillo, educativo y privado.</p>
          <div className="footer-links">
            <a href="https://excelsorvega.github.io/nutricion-inteligente-legal/">Privacidad</a>
            <a href="https://excelsorvega.github.io/nutricion-inteligente-legal/account_deletion.html">Eliminar cuenta</a>
            <a href="/soporte">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
