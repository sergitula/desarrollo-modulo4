import {juegos} from '../../data/juegos.js'
import { FeatureCard } from './FeatureCard'

export const FeatureSection = () => {
  return (
    <section>
      
      {/* **Título-Seccion** */}
        <div>
            <span>—</span> 
            <h2>Disciplinas del Torneo</h2>
        </div>
      {/* **Contenedor-tarjetas(cards)** */}
        <div>
            {juegos.map((juego) => (
            <FeatureCard 
                key={juego.id}
                tituloJuego={juego.tituloJuego}
                modalidad={juego.modalidad}
                imagen={juego.imagen}
            />
            ))}
        </div>

    </section>
  )
}
