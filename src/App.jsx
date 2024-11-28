
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Section1 from "./components/Section1/Section"
import SectionCard from "./components/Card/SectionCard"
import Fondo from "../src/assets/images/fondo-serv.png"
import SectionDos from "./components/Section2/SectionDos"
import SectionTres from "./components/Section3/SectionTres"
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
