# DevCode — Landing y Demos

Proyecto base para el negocio digital "DevCode" (webs y CV online), con demos públicas preparadas para GitHub Pages.

## Demo local

- Requisitos: `Python` instalado.
- Ejecuta en la raíz del proyecto:

```bash
python -m http.server 5500
```

- Abre: `http://localhost:5500/docs/`

## Publicación en GitHub Pages

Este repo está preparado para publicar desde la carpeta `docs/`.

1. Subir a GitHub:
   - Configurado el remoto: `origin`
   - Rama principal: `main`
2. Activar Pages:
   - En GitHub: `Settings` → `Pages`
   - Source: `Deploy from a branch`
   - Branch: `main`, Folder: `/docs`
3. URL esperada: `https://antoniomba23.github.io/devcode-landing/`

## Estructura

- `docs/` — Portada de demos y recursos publicados en Pages
  - `index.html` — Portada de demos (Web Minimal y CV)
  - `devcode-cv/` — Demo de currículum online
  - `style.css`, `script.js`
- `index.html`, `style.css`, `script.js` — Landing base local
- `devcode-cv/` — Versión local del CV demo (referencia)

## Enlaces (a completar)

- GitHub Pages: `https://antoniomba23.github.io/devcode-landing/`
- Gumroad (plantillas Web y CV): pendiente
- Beacons (perfil unificado): pendiente

## Próximos pasos

- Añadir 5 plantillas Web (HTML/CSS/JS)
- Añadir 3 plantillas CV (HTML/CSS)
- Preparar listados en Gumroad con guía de uso
- Activar Beacons con enlaces a servicios y demos