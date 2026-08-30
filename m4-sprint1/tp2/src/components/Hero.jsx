
export const Hero = () => {
    const handleInscripcion = () => {
        alert("¡Las inscripciones a RetroCup '26 abren pronto! Prepará tu joystick.");
    }
    return (
        <section>
            <div>
                {/* **Etiqueta superior** */}
                <span>TORNEO OFICIAL</span>
                {/* **Titulo** */}
                <h1>
                    Vuelve a la era dorada: <br />
                    <span>La gloria te espera en 16 bits</span>
                </h1>
                {/* **Parrafo** */}
                <p>
                    El torneo arcade más competitivo del año. Demuestra tu nivel, acumula high scores y compite por premios en efectivo.
                </p>
                {/* **Boton** */}
                <button onClick={handleInscripcion}> 
                    INSERT COIN — INSCRIBIRSE
                </button>

            </div>
        </section>
    )
}
