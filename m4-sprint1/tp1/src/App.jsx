
import { ProfileHeader } from "./components/ProfileHeader"
import { SkillList } from "./components/SkillList"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"

function App() {
  const nombre = "Tula Sergio Rubén"
  const frase = "Estudiante avanzado de Ing. en Informática | Desarrollador Full Stack apasionado por construir soluciones tecnológicas robustas."

  return (
    <main className="min-h-screen px-4 py-6 text-center">
       <ProfileHeader nombre={nombre} frase={frase} />  
       <SkillList nombre={nombre}/>
       <Footer/> 
    </main>
  )
}

export default App
