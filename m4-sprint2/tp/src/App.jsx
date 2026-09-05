import { ItemList } from "./components/ItemList";
import ListPanel from "./components/ListPanel";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { juegos } from "./data/items";
import { Footer } from "./components/Footer";

function App() {
  //LISTA LISTA PERSONAL + PANEL "MI LISTA" DESACTIVADO (LISTA PERSONAL)
  // const [miListaDeJuegos, setmiListaDeJuegos] = useState([]); //--> Lista anteriror
  const [miListaDeJuegos, setmiListaDeJuegos] = useState(()=>{  // --> Lista para recuperar el localStorage
    try {
      const guardado = localStorage.getItem('miListaPersonal:miListaDeJuegos')
      return guardado ? JSON.parse(guardado) : []
    } catch {
      return []
    }
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  //BUSQUEDA
  const [busqueda, setBusqueda] = useState("");
  const juegosFiltrados = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()),
  );

  // JUNCION TOGGLE SOLICITADA (AGREGA O QUITA JUEGOS SEGUN CORRESPONDA)
  const toggleJuego = (juego) => {
    setmiListaDeJuegos((prevLista) => {
      // a. Verificar si el juego ya está en la lista
      const yaEsta = prevLista.some((item) => item.id === juego.id);
      if (yaEsta) {
        // b. Si ya está, lo sacamos usando .filter()
        return prevLista.filter((item) => item.id !== juego.id);
      } else {
        // c. Si no está, lo agregamos creando un array nuevo
        return [...prevLista, juego];
      }
    });
  };


  const vaciarLista = () => {
    const confirmado = window.confirm("¿Estás seguro de que querés vaciar toda tu lista?");
    if (confirmado) {
      setmiListaDeJuegos([]); // Limpiamos el estado de React
      localStorage.removeItem('miListaPersonal:miListaDeJuegos'); // Borramos solo nuestra clave del storage
    }
  };

  // El título de la pestaña muestra el contador con un useEffect: "Mi lista (3) | NombreDeTuApp".

  useEffect(() => {
    if (miListaDeJuegos.length > 0) {
      document.title = `Mi lista (${miListaDeJuegos.length})`;
    } else {
      document.title = "MiWatchList";
    }
  }, [miListaDeJuegos]); // se ejecuta la primera vez y cada vez que algo cambia

  //Aqui estoy guardando los datos milistaDeJuegos en el localStorage.
  useEffect(() => {
    localStorage.setItem('miListaPersonal:miListaDeJuegos', JSON.stringify(miListaDeJuegos))
  }, [miListaDeJuegos])

  
  return (
    <>
      <Navbar
        onAbrirPanel={() => setIsPanelOpen(true)}
        cantidadItems={miListaDeJuegos.length}
      />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <ItemList
        juegos={juegosFiltrados}
        miListaDeJuegos={miListaDeJuegos}
        toggleJuego={toggleJuego}
        busqueda={busqueda}
      />

      {isPanelOpen && (
        <ListPanel
          miListaDeJuegos={miListaDeJuegos}
          onClose={() => setIsPanelOpen(false)}
          quitarJuego={toggleJuego}
          vaciarLista={vaciarLista}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
