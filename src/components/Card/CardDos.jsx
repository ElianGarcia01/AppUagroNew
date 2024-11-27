import { useState, useEffect } from "react";
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardDos() {
    const [data, setData] = useState([]); // Inicializamos como arreglo vacío

    useEffect(() => {
        axios.get("https://uagroapp.uagro.mx/api/noticias/lista/0/15")
            .then((respuesta) => {
                console.log(respuesta.data);
                setData(respuesta.data);
            })
            .catch(error => {
                console.error('Error es el siguiente:', error.message);
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map(noticia => (
                        <div key={noticia.id} className="bg-white h-[450px] text-black rounded-xl">
                            <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                <img src={`${"https://uagroapp.uagro.mx/" + noticia.ruta_imagen}`} alt={noticia.titulo} className="h-44 w-44 rounded-full" />
                            </div>
                            <div className="felx flex-col justify-center items-center gap-4 p-4">
                                <h3 className="text-xl font-semibold uppercase">{noticia.titulo}</h3>

                                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CardDos;
