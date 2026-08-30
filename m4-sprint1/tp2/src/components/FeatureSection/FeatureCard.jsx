
export const FeatureCard = ({tituloJuego, modalidad, imagen}) => {
  return (
    <article className="bg-[var(--color-surface-container)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-outline-variant)] flex flex-col hover:border-[var(--color-primary-container)] transition-colors">

      {/* **Imagen** */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={imagen}
          alt={`Captura de ${tituloJuego}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* **Textos + enlace** */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-bold text-lg text-[var(--color-on-surface)]">
          {tituloJuego}
        </h3>
        <p className="font-body text-sm text-[var(--color-on-surface-variant)] border-l-2 border-[var(--color-primary-container)] pl-3">
          {modalidad}
        </p>
        <a
          href="#reglas"
          className="font-label text-xs tracking-widest text-[var(--color-primary-container)] hover:underline mt-auto pt-2"
        >
          VER REGLAS →
        </a>
      </div>

    </article>
  )
}
