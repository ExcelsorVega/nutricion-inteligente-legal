# Nutrición Inteligente · páginas legales públicas

## Por qué este repositorio es público

Decisión de Ernesto (10-10-2026): este repositorio sigue **público** como
excepción a la regla de repositorios privados, porque GitHub Pages gratuito lo
necesita para publicar la política de privacidad y la página de eliminación de
cuenta que exige Google Play. No cambies su visibilidad sin preguntarle y no
guardes aquí nada privado (código de la app, datos, claves ni documentos de
otros proyectos).

## Qué se publica

GitHub Pages sirve la raíz de `main`:

- `index.html`: política de privacidad
  (https://excelsorvega.github.io/nutricion-inteligente-legal/).
- `condiciones.html`: condiciones de uso.
- `account_deletion.html`: eliminación de cuenta sin la app instalada.

Las tres páginas **se generan** desde el repositorio privado
`Nutricion_Inteligente` (carpeta `src/lib/legal`), que es la única fuente de
los textos legales de la app, de estas páginas y de la pantalla nativa de
Health Connect. No las edites a mano:

```bash
npm run legal:generate -- --site ../nutricion-inteligente-legal
```

Publícalas a la vez que la versión de la app que incluye esos textos.

## Micrositio

`app/` es el micrositio de soporte (Next con vinext, alojado con OpenAI
Sites). Sus enlaces de privacidad apuntan a las páginas de arriba y su
contacto es `privacidad@sideraldynamic.com`.
