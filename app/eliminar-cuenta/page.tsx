import { InnerHero, SiteFooter, SiteHeader } from '../shared';

export default function DeleteAccountPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Privacidad y control" title="Eliminar tu cuenta y tus datos." lead="Puedes solicitar la eliminación completa aunque ya no tengas la aplicación instalada. No necesitas volver a descargarla." />
      <section className="shell legal-grid">
        <article className="legal-card primary"><span>Desde la web</span><h2>Solicitarla por correo</h2><p>Escribe desde el correo asociado a tu cuenta. Lo utilizaremos únicamente para comprobar que la solicitud corresponde a la persona titular.</p><a className="button button-primary" href="mailto:privacidad@excelsor.es?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta%20-%20Nutrici%C3%B3n%20Inteligente">Solicitar eliminación</a></article>
        <article className="legal-card"><span>Desde la app</span><h2>Eliminarla directamente</h2><ol><li>Abre <strong>Perfil</strong>.</li><li>Pulsa <strong>Eliminar cuenta</strong>.</li><li>Revisa el aviso y confirma.</li></ol><p className="small-note">La sesión debe estar iniciada para usar esta vía.</p></article>
      </section>
      <section className="shell legal-copy short"><h2>Qué se elimina</h2><ul><li>Cuenta, perfil y objetivos personales.</li><li>Diario de comidas, favoritos, actividad y peso sincronizado.</li><li>Fotografías vinculadas a tu perfil y comidas.</li><li>Preferencias, destinos de notificaciones y reportes vinculados a la cuenta.</li></ul><h2>Qué puede conservarse</h2><p>Determinados conceptos visuales colectivos y métricas agregadas pueden permanecer sin vinculación directa con tu cuenta. También se conservará información si existe una obligación legal aplicable, circunstancia que se comunicará expresamente.</p><p>La eliminación de la cuenta y de sus registros identificables es permanente.</p></section>
      <SiteFooter />
    </main>
  );
}
