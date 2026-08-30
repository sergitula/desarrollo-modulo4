
export const NavLink = ({texto,url,isBoton}) => {
    // Renderizado condicional
    return isBoton ? (
        // **Boton derecha**
        <a href={url}><button>{texto}</button></a>
    ) : (
        // **Enlaces centrales**
        <a href={url}>{texto}</a>
    )
}
