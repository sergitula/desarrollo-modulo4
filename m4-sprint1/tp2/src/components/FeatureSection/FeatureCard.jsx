
export const FeatureCard = ({tituloJuego,modalidad,imagen}) => {
  return (
    <article>
        {/* **Contenedor-imagen**  */}
        <div>
            <img src={imagen} alt={`Captura de ${tituloJuego}`} />
        </div>
        {/* **Contenedor-textos+enlace** */}
        <div>
            <h3>{tituloJuego}</h3>
            <p>{modalidad}</p>
            <a href="#reglas">VER REGLAS →</a>
        </div>

    </article>
  )
}
