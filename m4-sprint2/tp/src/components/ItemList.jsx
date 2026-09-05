// import { juegos } from '../data/items'
import ItemCard from './ItemCard'

export const ItemList = ({juegos,miListaDeJuegos, toggleJuego, busqueda }) => {

    if (juegos.length === 0) {
        return (
            <p className="">
                🔍 No encontró nada para "{busqueda}" 
            </p>
        )
    }

    return (
        <section>
            <div>
                {juegos.map((juego) => {
                    const estaEnLista = miListaDeJuegos.some((item) => item.id === juego.id);
                    return (
                        <ItemCard 
                            key={juego.id}
                            juego={juego}
                            enMiLista={estaEnLista}
                            toggleJuego={toggleJuego}
                        />
                    );
                })}
            </div>
        </section>
    )
}