# Francis Castillo — Portfolio

Portafolio personal construido con **Next.js 14** + **TypeScript** + **CSS Modules**.

## 🚀 Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura

```
portfolio/
├── app/
│   ├── globals.css      # Variables CSS globales y estilos base
│   ├── layout.tsx       # Layout raíz (metadata, fuentes)
│   └── page.tsx         # Página principal
├── components/
│   ├── Nav.tsx / Nav.module.css
│   ├── Hero.tsx / Hero.module.css       # Terminal animada
│   ├── Expertise.tsx / Expertise.module.css
│   ├── Skills.tsx / Skills.module.css
│   ├── Trayectoria.tsx / Trayectoria.module.css
│   ├── Contact.tsx / Contact.module.css  # Email, LinkedIn, GitHub
│   ├── Footer.tsx / Footer.module.css
│   └── RevealInit.tsx   # Animaciones de scroll
└── public/
    └── imagen/          # Coloca aquí tu CV en PDF
```

## ✏️ Personalización rápida

### Cambiar tus links de contacto
Edita `components/Contact.tsx` y actualiza el array `links`:

```ts
const links = [
  { icon: '✉️', label: 'Email', value: 'TU_EMAIL', href: 'mailto:TU_EMAIL' },
  { icon: '💼', label: 'LinkedIn', value: 'TU_LINKEDIN', href: 'https://linkedin.com/in/TU_USER' },
  { icon: '🐙', label: 'GitHub', value: 'TU_GITHUB', href: 'https://github.com/TU_USER' },
]
```

### Cambiar colores
Edita las variables en `app/globals.css`:

```css
:root {
  --blue: #00D4FF;   /* Acento principal */
  --green: #00FF88;  /* Terminal / badges */
  --purple: #7B61FF; /* Skills Dev */
}
```

### Agregar tu CV
Coloca el PDF en `public/imagen/` con el nombre exacto:
`Francis_Castillo_CV.pdf`
 