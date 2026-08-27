import Image from 'next/image';
import { InnerHero, SiteFooter, SiteHeader } from '../shared';

const lessons = [
  ['Proteínas', 'Construyen y reparan tejidos, ayudan a conservar masa muscular y participan en muchas funciones del organismo.', 'green'],
  ['Hidratos', 'Son una fuente importante de energía. La calidad, la cantidad y el contexto de la comida importan más que demonizarlos.', 'blue'],
  ['Grasas', 'Ayudan a formar membranas y hormonas y permiten absorber vitaminas como A, D, E y K.', 'yellow'],
  ['Fibra', 'Favorece la salud digestiva y la saciedad. Frutas, verduras, legumbres y cereales integrales ayudan a sumarla.', 'orange'],
  ['Hidratación', 'El agua interviene en la regulación de la temperatura y en el transporte de nutrientes.', 'aqua'],
  ['Micronutrientes', 'Vitaminas y minerales actúan en pequeñas cantidades, pero sostienen procesos esenciales.', 'purple'],
  ['Etiquetas', 'Aprender a leer porciones, ingredientes y valores por 100 g permite comparar con más criterio.', 'cream'],
];

export default function LearnPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero
        eyebrow="Biblioteca de nutrición"
        title="Aprender a comer, sin reglas imposibles."
        lead="Explicaciones breves, rigurosas y prácticas para comprender qué hace cada nutriente. La información es educativa y no sustituye la atención sanitaria."
      />
      <section className="shell visual-guide">
        <div className="visual-guide-copy">
          <p className="eyebrow">Guía visual</p>
          <h2>Tres familias, funciones diferentes.</h2>
          <p>Los macronutrientes no compiten entre sí. Forman parte de una alimentación variada y cumplen papeles distintos.</p>
        </div>
        <div className="macro-visual-frame">
          <Image src="/guia-visual-macros.png" alt="Alimentos fuente de proteínas, hidratos y grasas saludables" width={1536} height={1024} priority />
          <div className="macro-labels" aria-hidden="true">
            <span><strong>Proteínas</strong><small>Reparar y mantener</small></span>
            <span><strong>Hidratos</strong><small>Energía disponible</small></span>
            <span><strong>Grasas</strong><small>Proteger y regular</small></span>
          </div>
        </div>
      </section>
      <section className="shell lesson-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">Lecciones rápidas</p><h2>Empieza por lo esencial.</h2></div>
          <p>En la app podrás marcar lecciones como completadas y recibir una sugerencia ocasional relacionada con tus registros.</p>
        </div>
        <div className="lesson-grid">
          {lessons.map(([title, copy, tone], index) => (
            <article className={`lesson-card ${tone}`} key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>Lectura de 1–2 minutos</small>
            </article>
          ))}
        </div>
      </section>
      <section className="disclaimer-band">
        <div className="shell"><strong>Una referencia, no un diagnóstico.</strong><p>Si tienes una enfermedad, alergia, embarazo o necesidades específicas, consulta a un médico o dietista-nutricionista.</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
