import { InnerHero, SiteFooter, SiteHeader } from '../shared';

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Última actualización: 28 de agosto de 2026" title="Política de privacidad." lead="Esta política explica qué datos utiliza Nutrición Inteligente, para qué se emplean y qué control tienes sobre ellos durante la beta cerrada." />
      <article className="shell legal-copy">
        <h2>1. Responsable y alcance</h2>
        <p>El responsable de la aplicación en Google Play es <strong>Excelsor Vega</strong>. Nutrición Inteligente está destinada a personas mayores de 18 años y ofrece seguimiento nutricional informativo; no diagnostica ni sustituye la atención médica.</p>
        <h2>2. Datos que utilizamos</h2>
        <ul>
          <li><strong>Cuenta:</strong> nombre y correo electrónico.</li>
          <li><strong>Perfil:</strong> edad, sexo biológico, peso, altura, objetivo y nivel de actividad que introduces voluntariamente.</li>
          <li><strong>Alimentación:</strong> comidas, cantidades, recetas, favoritos y estimaciones nutricionales.</li>
          <li><strong>Imágenes:</strong> fotografías de comidas y, si decides añadirla, una imagen de perfil.</li>
          <li><strong>Voz:</strong> en modo Solo móvil se utiliza el servicio del dispositivo. En modo Automática, audio o texto pueden enviarse al servicio remoto de voz para transcribir o generar audio temporal.</li>
          <li><strong>Health Connect:</strong> pasos, calorías activas y peso, únicamente tras conceder los permisos correspondientes.</li>
          <li><strong>Notificaciones:</strong> token de entrega, identificador aleatorio de instalación, plataforma, versión y zona horaria si activas avisos remotos.</li>
          <li><strong>Reportes de IA:</strong> el contenido concreto que decides reportar, el motivo y el comentario opcional.</li>
        </ul>
        <h2>3. Para qué los usamos</h2>
        <ul><li>Mostrar tu diario, objetivos y progreso.</li><li>Analizar texto o imágenes y responder desde Aida.</li><li>Sincronizar Health Connect al abrir o volver a la app cuando ya has concedido permiso.</li><li>Programar recordatorios y avisos que activas.</li><li>Revisar contenido de IA que reportas.</li></ul>
        <p>No vendemos tus datos ni los utilizamos para publicidad personalizada.</p>
        <h2>4. Servicios que participan</h2>
        <ul>
          <li><strong>Supabase:</strong> autenticación, base de datos, almacenamiento y funciones de servidor.</li>
          <li><strong>Google Gemini u Ollama:</strong> análisis de texto o imagen según la configuración segura del servidor.</li>
          <li><strong>Google Cloud / Vertex:</strong> funciones remotas de voz cuando eliges el modo Automática.</li>
          <li><strong>Expo Push y el transporte Android de notificaciones:</strong> entrega de avisos remotos.</li>
          <li><strong>Open Food Facts:</strong> consulta de productos por código de barras.</li>
          <li><strong>Health Connect:</strong> acceso a los tipos de datos que autorizas.</li>
        </ul>
        <h2>5. Seguridad y almacenamiento</h2>
        <p>La comunicación usa HTTPS/TLS y las claves privadas de proveedores permanecen en servicios de servidor. Las comidas y sus fotografías se almacenan con controles por usuario. Para reutilizar ilustraciones genéricas, el nombre de un alimento puede incorporarse a un catálogo colectivo sin mostrar el identificador de la cuenta ni la fotografía original. Algunas imágenes destinadas a mostrarse mediante una URL, como la imagen de perfil, pueden servirse a quien conozca esa dirección; no existe un directorio público de perfiles.</p>
        <h2>6. Retención y eliminación</h2>
        <p>Conservamos los datos mientras tu cuenta esté activa o durante el tiempo necesario para prestar el servicio. Puedes borrar elementos concretos desde la app y eliminar la cuenta desde <strong>Perfil &gt; Eliminar cuenta</strong> o mediante nuestra <a href="/eliminar-cuenta">página de eliminación</a>. Al borrar la cuenta se eliminan sus registros identificables; determinados conceptos visuales colectivos y métricas agregadas pueden permanecer sin vinculación directa con la cuenta.</p>
        <h2>7. Tus decisiones</h2>
        <ul><li>Modificar los datos de tu perfil.</li><li>Elegir entre voz remota y voz del dispositivo.</li><li>Revocar cámara, micrófono, notificaciones o Health Connect desde Android.</li><li>Solicitar acceso, rectificación o eliminación.</li></ul>
        <h2>8. Contacto</h2>
        <p>Para privacidad, soporte de cuenta o eliminación de datos: <a href="mailto:privacidad@excelsor.es">privacidad@excelsor.es</a>.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
