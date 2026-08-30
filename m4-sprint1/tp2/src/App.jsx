import { FeatureSection } from "./components/FeatureSection/FeatureSection"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar /> 
      <Hero />
      <FeatureSection />
      <Footer />
    </>
  )
}

export default App
