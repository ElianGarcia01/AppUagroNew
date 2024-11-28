import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return(
        <div className="w-full bg-blue-950 text-gray-200 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase py-2">Eventos</h6>
                    <ol>
                        <li className="py-1">Convocatoria</li>
                        <li className="py-1">Convocatoria</li>
                        <li className="py-1">Convocatoria</li>
                        <li className="py-1">Convocatoria</li>
                        <li className="py-1">Convocatoria</li>
                        <li className="py-1">Convocatoria</li>
                    </ol>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Noticias</h6>
                    <ol>
                        <li className="py-1">Noticias</li>
                        <li className="py-1">Noticias</li>
                        <li className="py-1">Noticias</li>
                        <li className="py-1">Noticias</li>
                        <li className="py-1">Noticias</li>
                        <li className="py-1">Noticias</li>
                    </ol>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Enlaces</h6>
                    <ol>
                        <li className="py-1">Sitio Oficial</li>
                        <li className="py-1">Sitio Oficial</li>
                        <li className="py-1">Sitio Oficial</li>
                        <li className="py-1">Sitio Oficial</li>
                        <li className="py-1">Sitio Oficial</li>
                        <li className="py-1">Sitio Oficial</li>
                    </ol>
                </div>

                <div className="col-span-2 pt-2 md:pt-2 ">
                    <p className="font-bold uppercase">Descripcion de la app UAGRO</p>
                    <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatibus, cupiditate voluptate repellat quidem quos illum aut ipsa dolorum consectetur. Commodi eveniet iure unde laborum temporibus exercitationem natus, ducimus odio?</p>
                    <form className="flex flex-col sm:flex-row " action="">
                        <input className="w-full p-2 mr-4 rounded-md mb-4 bg-slate-100 text-black" type="email" placeholder="Enter email"/>
                        <button className="p-2 mb-4 bg-red-600 rounded-lg">Ingresar</button>
                    </form>

                </div>
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
                <p>UNIVERSIDAD AUTONOMA DE GUERRERO 2024</p>
                <div className="flex sm:w-{300px} pt-4 text-2xl gap-12">
                    <FaFacebook/>
                    
                    <FaInstagram/>
                    <FaTwitter/>
                    
                </div>
            </div>

        </div>
    )
}

export default Footer