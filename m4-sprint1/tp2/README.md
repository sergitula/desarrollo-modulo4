# TP 2: Landing Page - Sergio Tula

## Qué es
Una landing page responsive para un torneo de E-Sports arcade (RetroCup '26). Está construida con React, Vite y Tailwind CSS v4

## Cómo correrlo
```bash
npm install
npm run dev
```

## Uso de IA

- Herramientas que usé: Gemini (como tutor) y el diseño base generado por Google Stitch.

- Qué generé con IA y qué escribí o corregí a mano: Toda la lógica dura de React (crear los 6 componentes, separar los datos en archivos locales, armar la lógica del .map() y el renderizado condicional del Navbar) la construí a mano paso a paso para asegurarme de entender las bases. A la IA la usé de forma colaborativa para destrabarme: me ayudó a encontrar errores de sintaxis cuando la pantalla me quedaba en blanco, a traducir las especificaciones de diseño del archivo DESIGN.md de Stitch al nuevo formato @theme de Tailwind v4, y para inyectar directamente las clases de estilos en mis componentes una vez que la lógica ya estaba 100% funcional (Esto ultimo se hizo directamente con la IA integrada de Kiro.)

 ## Lo que me costó

 Al principio renegué bastante conectando los archivos de datos con los componentes. Me pasó que exportaba un arreglo con un nombre y lo importaba con otro "por ejemplo, le pasaba una prop como title desde el padre pero el hijo esperaba recibir tituloJuego", lo que hacía que no se renderizara nada.