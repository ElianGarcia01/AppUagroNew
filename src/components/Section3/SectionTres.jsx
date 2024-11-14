
function SectionTres() {

    const infoCards = [
        {
            "id": 1,
            "img": "https://uagroapp.uagro.mx/imgs/welcome/oferta-educativa.png",
            "titulo": "Oferta Educativa",
            "description": "En la Universidad Autónoma de Guerrero, ofrecemos una extensa gama de programas educativos diseñados para satisfacer las necesidades de todos los estudiantes. Únete a nuestra comunidad académica y descubre las oportunidades que tenemos para ti..",
        },
        {
            "id": 2,
            "img": "https://uagroapp.uagro.mx/imgs/welcome/consulta-calificaciones.png",
            "titulo": "Consulta de Calificaciones",
            "description": "Si eres parte de la comunidad UAGro, regístrate con tu correo institucional para acceder a tus calificaciones de manera instantánea, desde cualquier lugar y en cualquier momento..",
        },
        {
            "id": 3,
            "img": "https://uagroapp.uagro.mx/imgs/welcome/credencial.png",
            "titulo": "Credencial Digital",
            "description": "Identifícate fácilmente como alumno con nuestra aplicación. En el apartado de credencial, encontrarás la versión más actualizada de tu identificación escolar..",
        },
        {
            "id": 4,
            "img": "https://uagroapp.uagro.mx/imgs/welcome/credencial.png",
            "titulo": "Credencial Digital",
            "description": "Identifícate fácilmente como alumno con nuestra aplicación. En el apartado de credencial, encontrarás la versión más actualizada de tu identificación escolar..",
        },
    ]


    return (
        <div className='w-full bg-white py-10'>
            <div className="container mx-auto px-4">
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {infoCards.map((data) => (
                        <div
                            key={data.id}
                            className='bg-white rounded-xl drop-shadow-lg flex flex-col sm:flex-row items-center justify-start sm:max-w-lg mx-auto'
                        >
                            <img
                                className='w-full sm:w-1/3 sm:h-auto  object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-t-none'
                                src={data.img}
                                alt={data.titulo}
                            />
                            <div className='p-6 sm:w-2/3 w-full'>
                                <h3 className='font-semibold text-2xl text-gray-800 mb-2'>{data.titulo}</h3>
                                <p className='text-gray-600 text-base leading-relaxed text-justify sm:text-start'>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTres