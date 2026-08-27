import { InnerHero, SiteFooter, SiteHeader } from '../shared';

const faqs = [
  ['No recibo notificaciones', 'Comprueba que estén activadas dentro de Perfil > Notificaciones y en Ajustes de Android > Aplicaciones > Nutrición Inteligente > Notificaciones. Los recordatorios locales y los avisos de Aida se configuran por separado.'],
  ['La voz no suena natural o no transcribe', 'En Perfil > Voz y dictado elige Automática para la voz remota o Solo móvil para mantener el procesamiento en el dispositivo. Revisa también el permiso de micrófono y la conexión.'],
  ['Mi peso de RENPHO no aparece', 'RENPHO debe escribir el peso en Health Connect. Después, concede a Nutrición Inteligente permiso para leer Peso. La app sincroniza cuando se abre o vuelve al primer plano.'],
  ['Una foto no se sube', 'Comprueba el permiso de fotos/cámara, la conexión y que el archivo sea una imagen compatible. La aplicación reduce y normaliza la foto antes de guardarla.'],
  ['La actualización desde la app falla', 'Abre la ficha de Nutrición Inteligente en Google Play y pulsa Actualizar. Play Store es la fuente oficial de todas las versiones instalables.'],
  ['Quiero eliminar mi cuenta', 'Puedes hacerlo desde Perfil > Eliminar cuenta o desde la página web de eliminación aunque ya no tengas la app instalada.'],
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Centro de ayuda" title="Respuestas claras cuando algo no encaja." lead="Empieza por las comprobaciones rápidas. Si el problema continúa, escríbenos indicando el modelo de móvil, la versión de Android y la versión de la app, pero nunca envíes contraseñas ni códigos." />
      <section className="shell support-steps">
        <article><span>1</span><h2>Actualiza</h2><p>Instala la versión más reciente desde Google Play.</p></article>
        <article><span>2</span><h2>Revisa permisos</h2><p>Cámara, micrófono, notificaciones y Health Connect se conceden por separado.</p></article>
        <article><span>3</span><h2>Vuelve a probar</h2><p>Cierra y abre la app después de modificar un permiso o actualizarla.</p></article>
      </section>
      <section className="shell faq-section">
        <div className="section-heading compact"><div><p className="eyebrow">Preguntas frecuentes</p><h2>Soluciones rápidas.</h2></div><p>Estas indicaciones cubren los casos más habituales de la beta Android.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}
        </div>
      </section>
      <section className="contact-panel shell">
        <div><p className="eyebrow">Contacto</p><h2>¿Sigue sin funcionar?</h2><p>Escríbenos y cuéntanos qué estabas intentando hacer. No incluyas información médica ni datos sensibles innecesarios.</p></div>
        <a className="button button-primary" href="mailto:privacidad@excelsor.es?subject=Soporte%20Nutrici%C3%B3n%20Inteligente">Escribir a soporte <span>→</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
