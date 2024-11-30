import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full bg-blue-950 text-gray-200 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
                <div>
                    <h7 className="font-bold uppercase py-2">Información Institucional</h7>
                    <ol>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Historia</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Misión y Visión</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Autoridades</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Calendario Escolar</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Convocatorias</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Transparencia</a></li>
                    </ol>
                </div>
                <div>
                    <h7 className="font-bold uppercase py-2">Servicios para estudiantes</h7>
                    <ol>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Biblioteca Virtual</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Plataforma Educativa</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Becas y Apoyos</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Consejería Académica</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Deportes y Cultura</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Residencias Profesionales</a></li>
                    </ol>
                </div>
                <div>
                    <h7 className="font-bold uppercase py-2">Contacto y Enlaces Útiles</h7>
                    <ol>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Directorio</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Correo Institucional</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Mapa del Sitio</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Aviso de Privacidad</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Bolsa de Trabajo</a></li>
                        <li><a href="#" className="py-1 text-gray-200 no-underline">Redes Sociales</a></li>
                    </ol>
                </div>

                <div className="col-span-2 pt-2 md:pt-2 ">
                    <h5 className="font-bold uppercase">Descripcion de la app UAGRO</h5>
                    <p className="py-4">La Universidad Autónoma de Guerrero (UAGro) es una institución pública de educación superior y media superior en México. Su campus principal se encuentra en Chilpancingo, Guerrero, y cuenta con planteles en otras ciudades del estado.</p>
                    <form className="flex flex-col sm:flex-row " action="">
                        <input className="w-full p-2 mr-4 rounded-md mb-4 bg-slate-100 text-black" type="email" placeholder="Enter email" />
                        <button className="p-2 mb-4 bg-red-600 rounded-lg">Ingresar</button>
                    </form>

                </div>
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
                <p>UNIVERSIDAD AUTONOMA DE GUERRERO 2024</p>
                <div className="flex sm:w-{300px} pt-4 text-2xl gap-12">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>

        </div>
    )
}

export default Footer