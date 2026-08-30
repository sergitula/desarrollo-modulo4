export const NavLink = ({ texto, url, isBoton, onClick }) => {
    return isBoton ? (
        // **Botón Discord — borde rojo/secondary, hover rojo sólido con letras blancas**
        <a href={url} onClick={onClick}>
            <button className="font-label text-xs tracking-widest text-[var(--color-secondary)] border border-[var(--color-secondary)] px-4 py-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-secondary-container)] hover:text-white hover:border-[var(--color-secondary-container)] transition-all cursor-pointer">
                {texto}
            </button>
        </a>
    ) : (
        // **Enlaces — hover celeste neon**
        <a
            href={url}
            onClick={onClick}
            className="font-label text-xs tracking-widest text-[var(--color-on-surface-variant)] transition-all hover:text-[var(--color-primary-container)]"
            style={{ '--tw-hover-shadow': 'none' }}
            onMouseEnter={e => e.currentTarget.style.textShadow = '0 0 8px var(--color-primary-container)'}
            onMouseLeave={e => e.currentTarget.style.textShadow = 'none'}
        >
            {texto}
        </a>
    )
}
