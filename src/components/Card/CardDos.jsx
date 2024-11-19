import { useState, useEffect } from 'react'
import axios from 'axios'
import "../Card/SectionDosCard.css"

const CardCarousel = () => {
    const [noticias, setNoticias] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios
            .get('https://uagroapp.uagro.mx/api/noticias/lista/0/8')
            .then((respuesta) => {
                setNoticias(respuesta.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    const itemsToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsToShow < noticias.length ? prevIndex + itemsToShow : 0
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : noticias.length - itemsToShow
        )
    }

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Noticias</h2>
            <div className="carousel-wrapper">
                
                <div className="carousel-content">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${(currentIndex / noticias.length) * 100}%)`,
                        }}
                    >
                        {noticias.map((data, index) => (
                            <div
                                key={index}
                                className="carousel-card"
                                style={{
                                    flex: `0 0 ${100 / itemsToShow}%`,
                                }}
                            >
                                <div className="card-content">
                                    <img
                                        src={`https://uagroapp.uagro.mx/${data.ruta_imagen}`}
                                        alt={data.titulo}
                                        className="card-image"
                                    />
                                    <h3 className="card-title">{data.titulo}</h3>
                                    <p className="card-description">{data.descripcion}</p>
                                    <button className="card-button">Leer Más</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-control right" onClick={nextSlide}>
                    &#10095;
                </button>
                <button className="carousel-control left" onClick={prevSlide}>
                    &#10094;
                </button>
            </div>
        </div>
    );
};

export default CardCarousel