import { useState, useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#1e3a8a" }}
            onClick={onClick}
        />
    );
}

function CardDos() {
    const [data, setData] = useState([]) // Inicializamos como arreglo vacío

    useEffect(() => {
        axios.get("https://uagroapp.uagro.mx/api/noticias/lista/0/37")
            .then((respuesta) => {
                console.log(respuesta.data)
                setData(respuesta.data)
            })
            .catch(error => {
                console.error('Error es el siguiente:', error.message)
            })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="w-full m-auto h-2/3 pt-10 ">
            <div className="mt-20 w-full m-auto py-4">
                <Slider {...settings}>
                    {data.map(noticia => (
                        <div key={noticia.id} className="bg-white text-black rounded-xl flex flex-col justify-between shadow-md hover:shadow-lg transition-transform transform my-4">
                            <div className="rounded-t-xl flex justify-center items-center">
                                <img src={"https://uagroapp.uagro.mx/" + noticia.ruta_imagen} alt={noticia.titulo} className="h-80 w-96 object-fill rounded-t-lg rounded-b-md" />
                            </div>
                            <div className="flex flex-col justify-between p-4 h-full">
                                <h3 className="text-xl text-center font-semibold uppercase truncate">{noticia.titulo}</h3>
                                <div className="flex justify-center w-full px-4 mx-auto">
                                    <div >
                                        {noticia.enlace ? <button className="bg-blue-950 text-white text-lg px-8 py-1 rounded-xl text-center mt-4 mx-auto w-full"><a className="text-gray-200 no-underline">Abrir</a></button> : ""}
                                    </div>
                                    <div>
                                        {noticia.ruta_archivo ? <button className="bg-red-500 text-white text-lg px-6 py-1 rounded-xl text-center mt-4 mx-auto w-full ms-1"> <a href={"https://uagroapp.uagro.mx/" + noticia.ruta_archivo} className="text-gray-200 no-underline">Archivo</a></button> : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )

}

export default CardDos
