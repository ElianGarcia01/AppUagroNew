import { React, useState, useEffect } from 'react'
import axios from "axios";

const Card = () => {

    const [noticias, setNoticias] = useState(null)

    useEffect(() => {
        axios.get("https://dgtidweb.uagro.mx:8080/api/noticias?populate=*")
            .then((respuesta) => {
                console.log(respuesta)
                setNoticias(respuesta.data.data)
            })
            .catch(error => {
                console.error('Error:', error.message);
            })
    }, [])

    if (!noticias) {
        return (
            <div>LOADING....</div>
        )
    }

    return (
        <>
            {noticias.map((data) => (
                <div
                    key={data.id}
                    className='bg-white rounded-xl drop-shadow-lg flex flex-col sm:flex-row items-center justify-start sm:max-w-lg mx-auto'
                >
                    <img
                        className='w-full sm:w-1/3 sm:h-auto  object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-t-none'
                        src={data.img.url ? `https://dgtidweb.uagro.mx${data.img.url}` : ""}
                        alt={data.nombre}
                    />
                    <div className='p-6 sm:w-2/3 w-full'>
                        <h3 className='font-semibold text-2xl text-gray-800 mb-2'>{data.nombre}</h3>
                        <p className='text-gray-600 text-base leading-relaxed text-justify sm:text-start'>{data.descripcion}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default Card