import { useState, useEffect } from "react"

import imgModoClaro from '../assets/tema/modo-claro.png'
import imgModoOscuro from '../assets/tema/modo-oscuro.png'

const CLAVE_TEMA = 'miWatchList:tema' 

const ThemeSwitcher = () => {
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem(CLAVE_TEMA) === 'oscuro'
  })
  useEffect(() => {
    localStorage.setItem(CLAVE_TEMA, modoOscuro ? 'oscuro' : 'claro')
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

  return (
    <button
      type="button"
      onClick={() => setModoOscuro((prev) => !prev)}
      title={modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className=""
    >
      {modoOscuro ? (<img src={imgModoClaro} alt="Modo Claro" className="w-6 h-6" />) : (<img src={imgModoOscuro} alt="Modo Oscuro" className="w-6 h-6" />)}
    </button>
  )
}

export default ThemeSwitcher