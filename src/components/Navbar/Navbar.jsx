import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleClick = () => setToggle(!toggle)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div
      className={`w-full h-[80px] z-10 fixed ${isScrolled ? "bg-blue-950 drop-shadow-2xl" : "bg-transparent"
        } transition-colors duration-300`}
    >
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src="https://uagroapp.uagro.mx/imgs/welcome/logo-uagro.png"
            alt="logoUagro"
            className="sm:ml-10 ss:ml-10 md:ml-3 w-full h-[50px]"
          />
        </div>

        <div className="flex items-center">
          <ul className={`hidden md:flex `}>
            <li><a href="https://uagroapp.uagro.mx/home" className="text-gray-200 no-underline">Administracion</a></li>
            <li><a href="https://uagroapp.uagro.mx/storage/uagroApp/manuales/Manual.pdf" className="text-gray-200 no-underline">Manual</a></li>
            <li><a href="https://www.youtube.com/watch?v=z76owU2SOb8" className="text-gray-200 no-underline">Video Tutorial</a></li>
            <li><a href="mailto:uagroapp@uagro.mx" className="text-gray-200 no-underline">Contacto</a></li>
          </ul>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={
              !toggle
                ? "https://img.icons8.com/m_rounded/200/FFFFFF/menu.png"
                : "https://cdn-icons-png.freepik.com/512/9055/9055079.png"
            }
            alt=""
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>

      <ul className={`${toggle ? "absolute w-full bg-blue-950 px-8 md:hidden" : "hidden"}`}>
      <li><a href="https://uagroapp.uagro.mx/home" className="text-gray-200 no-underline">Administracion</a></li>
            <li><a href="https://uagroapp.uagro.mx/storage/uagroApp/manuales/Manual.pdf" className="text-gray-200 no-underline">Manual</a></li>
            <li><a href="https://www.youtube.com/watch?v=z76owU2SOb8" className="text-gray-200 no-underline">Video Tutorial</a></li>
            <li><a href="mailto:uagroapp@uagro.mx" className="text-gray-200 no-underline">Contacto</a></li>
      </ul>
    </div>
  )
}

export default Navbar
