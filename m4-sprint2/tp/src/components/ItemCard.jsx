
const ItemCard = ({juego, enMiLista, toggleJuego}) => {
// const ItemCard = ({titulo,genero, puntaje,precio, enOferta}) => {
    return (
        <article className="border flex">
            <h3>{juego.titulo}</h3>
            <p>{juego.genero} - {juego.anio}</p>
            <p>{juego.puntaje}/100</p>
            <p>{juego.precio}</p>
            {juego.enOferta && <span>¡EN OFERTA!</span>}
            <button onClick={()=>toggleJuego(juego)}> 
                {enMiLista ? "✓ En mi lista" : "[+]Agregar" }
            </button>
        </article>
    )
}

export default ItemCard