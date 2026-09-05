
const ListPanel = ({miListaDeJuegos, onClose, quitarJuego,vaciarLista}) => {
  return (
    <div>
        <div>
            <h2>Mi lista</h2>
            <button onClick={onClose}>[X]Cerrar</button>
        </div>
        
        {miListaDeJuegos.length === 0 ? 
            (<p>No tienes juegos en tu lista personal. ¡Agrega algunos!</p>
            ):(
                <div>
                    <ul>
                        {miListaDeJuegos.map((juego) => (
                            <li key={juego.id} >
                                <span>{juego.titulo}- ${juego.precio}</span>
                                <button onClick={() => quitarJuego(juego)}>Quitar</button>
                            </li>
                        ))}
                    </ul>
                    <button 
                            onClick={vaciarLista}
                            className="mt-4 text-red-500 font-bold"
                    >
                        Vaciar mi lista
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default ListPanel