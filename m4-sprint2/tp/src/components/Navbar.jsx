import ThemeSwitcher from "./ThemeSwitcher"

export const Navbar = ({onAbrirPanel, cantidadItems}) => {
  return (
    <header>
        <nav>
            <a href="#">🎮 MiWatchList</a>
            <a href="#">Explorar</a>
            <button onClick={onAbrirPanel}>
                Mi Lista {cantidadItems > 0 && `(${cantidadItems})`}
            </button>
            <ThemeSwitcher />
        </nav>
    </header>
  )
}
