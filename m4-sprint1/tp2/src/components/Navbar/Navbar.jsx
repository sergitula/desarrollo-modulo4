import { enlaces } from '../../data/enlaces.js';
import { NavLink } from './NavLink.jsx';

export const Navbar = () => {
    return (
        <header className="w-full border-b border-[var(--color-outline-variant)]">

            {/*
              Checkbox oculto — Menu Hamburguesa
            */}
            <input
                type="checkbox"
                id="menu-toggle"
                className="sr-only peer/menu"
            />

            <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

                {/* Logo con glow neon permanente */}
                <a
                    href="#"
                    className="font-label font-bold text-lg tracking-widest text-[var(--color-primary-container)]"
                    style={{ textShadow: '0 0 12px var(--color-primary-container), 0 0 24px var(--color-primary-container)' }}
                >
                    RETROCUP '26
                </a>

                {/* Links + botón — ocultos en < 480px */}
                <div className="hidden min-[480px]:flex items-center gap-8">
                    {enlaces.map((enlace) => (
                        <NavLink
                            key={enlace.id}
                            texto={enlace.texto}
                            url={enlace.url}
                            isBoton={enlace.isBoton}
                        />
                    ))}
                </div>

                {/*
                  Label que controla el checkbox.
                  Visible solo en < 480px.
                  peer-checked cambia la apariencia de las barras para formar una X.
                */}
                <label
                    htmlFor="menu-toggle"
                    className="min-[480px]:hidden flex flex-col justify-center items-center gap-1.5 p-2 cursor-pointer"
                    aria-label="Abrir menú"
                >
                    {/* Barra superior: rota 45° cuando está checked */}
                    <span className="block w-6 h-0.5 bg-[var(--color-primary-container)] transition-all duration-300 origin-center peer-checked/menu:rotate-45 peer-checked/menu:translate-y-2" />
                    {/* Barra central: desaparece cuando está checked */}
                    <span className="block w-6 h-0.5 bg-[var(--color-primary-container)] transition-all duration-300 peer-checked/menu:opacity-0 peer-checked/menu:scale-x-0" />
                    {/* Barra inferior: rota -45° cuando está checked */}
                    <span className="block w-6 h-0.5 bg-[var(--color-primary-container)] transition-all duration-300 origin-center peer-checked/menu:-rotate-45 peer-checked/menu:-translate-y-2" />
                </label>

            </nav>

            {/*
              Menú desplegable móvil.
              Oculto por defecto (max-h-0 overflow-hidden).
              Cuando el checkbox está marcado (peer-checked) se expande (max-h-96).
              Solo visible en < 480px.
            */}
            <div className="min-[480px]:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked/menu:max-h-96 border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]">
                <div className="flex flex-col items-start gap-5 px-6 py-5">
                    {enlaces.map((enlace) => (
                        <NavLink
                            key={enlace.id}
                            texto={enlace.texto}
                            url={enlace.url}
                            isBoton={enlace.isBoton}
                        />
                    ))}
                </div>
            </div>

        </header>
    )
}
