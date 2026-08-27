import { InnerHero, SiteFooter, SiteHeader } from '../shared';

export default function BetaPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Programa beta Android" title="Ayúdanos a construir una aplicación mejor." lead="La prueba cerrada permite validar estabilidad, accesibilidad y utilidad antes de la publicación general. El acceso es por invitación y la instalación siempre se realiza desde Google Play." />
      <section className="shell beta-grid">
        <article className="beta-card green"><span>01</span><h2>Recibe una invitación</h2><p>Tu correo debe figurar en el grupo autorizado de la prueba cerrada.</p></article>
        <article className="beta-card orange"><span>02</span><h2>Acepta la prueba</h2><p>Abre el enlace con la misma cuenta de Google y confirma que quieres participar.</p></article>
        <article className="beta-card blue"><span>03</span><h2>Instala desde Play</h2><p>La ficha mostrará la aplicación como versión de prueba. Desde entonces recibirá actualizaciones de Play Store.</p></article>
      </section>
      <section className="shell beta-note">
        <div><p className="eyebrow">Actualizaciones</p><h2>Google Play es la fuente oficial.</h2></div>
        <div><p>Las nuevas compilaciones se prueban primero en el canal interno. Después se publica el mismo archivo validado en la prueba cerrada.</p><p>La descarga puede tardar unos minutos en aparecer. Si el aviso interno no completa la instalación, actualiza desde la ficha de Google Play.</p></div>
      </section>
      <section className="contact-panel shell">
        <div><p className="eyebrow">Solicitar acceso</p><h2>¿Quieres participar?</h2><p>Escríbenos desde la cuenta de Google que utilizarás en Play Store.</p></div>
        <a className="button button-primary" href="mailto:privacidad@excelsor.es?subject=Solicitud%20de%20acceso%20beta%20-%20Nutrici%C3%B3n%20Inteligente">Solicitar invitación <span>→</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
