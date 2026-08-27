import Image from 'next/image';
import Link from 'next/link';

export function SiteBrand() {
  return (
    <Link className="brand" href="/" aria-label="Nutrición Inteligente, inicio">
      <span className="brand-mark">
        <Image src="/marca-nutricion-inteligente.png" alt="" width={54} height={54} priority />
      </span>
      <span>Nutrición Inteligente</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <SiteBrand />
        <nav aria-label="Navegación principal">
          <Link href="/#como-funciona">Cómo funciona</Link>
          <a href="/aprende">Aprende</a>
          <a href="/soporte">Soporte</a>
        </nav>
        <a className="header-cta" href="/beta">Acceso beta</a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <SiteBrand />
        <p>Seguimiento nutricional sencillo, educativo y privado.</p>
        <div className="footer-links">
          <a href="/privacidad">Privacidad</a>
          <a href="/eliminar-cuenta">Eliminar cuenta</a>
          <a href="/soporte">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export function InnerHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="inner-hero">
      <div className="shell narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="inner-lead">{lead}</p>
      </div>
    </section>
  );
}
