
export const Hero = () => {
    const handleInscripcion = () => {
        alert("¡Las inscripciones a RetroCup '26 abren pronto! Prepará tu joystick.");
    }
    return (
        <section className="relative bg-grid bg-[var(--color-surface-container-lowest)] min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Degradado radial central */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto gap-6">
                {/* **Etiqueta superior — celeste neon** */}
                <span
                    className="font-label text-xs tracking-widest text-[var(--color-primary-container)] border border-[var(--color-primary-container)] px-4 py-1.5 rounded-full"
                    style={{ boxShadow: '0 0 8px var(--color-primary-container), inset 0 0 8px rgba(0,240,255,0.05)' }}
                >
                    TORNEO OFICIAL
                </span>

                {/* **Título** */}
                <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-tight text-[var(--color-on-surface)]">
                    Vuelve a la era dorada:
                    <br />
                    <span className="text-[var(--color-primary-container)]">
                        La gloria te espera en 16 bits
                    </span>
                </h1>

                {/* **Párrafo** */}
                <p className="font-body text-base text-[var(--color-on-surface-variant)] max-w-lg leading-relaxed">
                    El torneo arcade más competitivo del año. Demuestra tu nivel, acumula high scores
                    y compite por premios en efectivo.
                </p>

                {/* **Botón** */}
                <button
                    onClick={handleInscripcion}
                    className="font-label text-sm tracking-widest text-[var(--color-on-primary)] bg-[var(--color-primary-container)] px-8 py-3 rounded-[var(--radius-sm)] glow-primary hover:brightness-110 transition-all cursor-pointer mt-2"
                >
                    🕹 INSERT COIN — INSCRIBIRSE
                </button>
            </div>
        </section>
    )
}
