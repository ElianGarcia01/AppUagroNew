import { useState, useEffect } from "react";



function CardDos() {


    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://uagroapp.uagro.mx/api/noticias/lista/0/7")
        .then((response) => response.json)
        .then((data) => setData(data))
        console.log(data);
        
    },[])

    return(
        <div></div>
    )
}

export default CardDos