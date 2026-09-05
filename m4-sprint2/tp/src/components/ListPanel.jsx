
const ListPanel = ({miListaDeJuegos, onClose, quitarJuego}) => {
  return (
    <div>
        <div>
            <h2>Mi lista</h2>
            <button onClick={onClose}>[X]Cerrar</button>
        </div>
        
        {miListaDeJuegos.length === 0 ? 
            (<p>No tienes juegos en tu lista personal. ¡Agrega algunos!</p>
            ):(
                <ul>
                    {miListaDeJuegos.map((juego) => (
                        <li key={juego.id} >
                            <span>{juego.titulo}- ${juego.precio}</span>
                            <button onClick={() => quitarJuego(juego)}>Quitar</button>
                        </li>
                    ))}
                </ul>
            )
        }
    </div>
  )
}

export default ListPanel