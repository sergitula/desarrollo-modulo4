import {juegos} from '../../data/juegos.js'
import { FeatureCard } from './FeatureCard'

export const FeatureSection = () => {
  return (
    <section className="bg-[var(--color-surface-container-low)] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* **Título sección** */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[var(--color-primary-container)] text-2xl font-bold leading-none">—</span>
          <h2 className="font-display font-bold text-2xl text-[var(--color-on-surface)]">
            Disciplinas del Torneo
          </h2>
        </div>

        {/* **Grilla de tarjetas** */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {juegos.map((juego) => (
            <FeatureCard
              key={juego.id}
              tituloJuego={juego.tituloJuego}
              modalidad={juego.modalidad}
              imagen={juego.imagen}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
