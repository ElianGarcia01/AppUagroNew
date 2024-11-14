
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Section1 from "./components/Section1/Section"
import SectionCard from "./components/Card/SectionCard"
import Fondo from "../src/assets/AppUagroImg/fondo-serv.png"
import SectionDos from "./components/Section2/SectionDos"
import SectionTres from "./components/Section3/SectionTres"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Section1></Section1>
      <div className="relative min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Fondo})` }}>
        <div>
          <SectionCard></SectionCard>
          <SectionDos></SectionDos>
          <SectionTres></SectionTres>
        </div>
      </div>
    </>
  )
}

export default App
