# TP 1: Presentación Personal - Sergio Tula

## Qué es
Una página web estática y componentizada construida con React y Tailwind CSS v4 para mostrar mi perfil y habilidades como desarrollador Full Stack.

## Cómo correrlo
```bash
npm install
npm run dev
```

## Uso de IA
 - Herramientas que usé: Chat de Gemini , Kiro
 - Qué generé con IA y qué escribí o corregí a mano: Usé IA para extraer las skills de mi CV, redactar los textos de perfil y me ayudo a estructurar algunos de los componentes. Acomodé a mano la integración del botón, el paso de props y los ajustes visuales de Tailwind.

 ## Lo que me costó

Tuve un pequeño inconveniente con el botón del alert. Como metí el componente <Button/> adentro de <SkillList/>, la función se quedaba por el camino y no llegaba al botón. Para solucionarlo, revisé el proyecto de la clase y me di cuenta de que me faltaba pasar la función a mano a través de las props desde el componente padre hasta el hijo. 
