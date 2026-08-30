export const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface-container-lowest)] border-t border-[var(--color-outline-variant)] py-8 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* **Logo izq** */}
        <div>
          <span className="font-label font-bold text-lg tracking-widest text-[var(--color-primary)]">
            RETROCUP '26
          </span>
        </div>

        {/* **Íconos** */}
        <div className="flex items-center gap-4">
          <a
            href="#web"
            className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors text-xl"
            aria-label="Sitio web"
          >
            🌐
          </a>
          <a
            href="#contacto"
            className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors text-xl"
            aria-label="Contacto por email"
          >
            ✉️
          </a>
        </div>

        {/* **Texto der** */}
        <div>
          <p className="font-label text-xs tracking-widest text-[var(--color-on-surface-variant)]">
            © 2026 RETROCUP. ALL RIGHTS RESERVED. TRANSMISSION COMPLETE.
          </p>
        </div>

      </div>
    </footer>
  )
}
