import Recurso from "../../assets/AppUagroImg/Recurso.png"
import Celular from "../../assets/AppUagroImg/img-serv2.png"
import RecursoDos from "../../assets/AppUagroImg/Recurso_2.png"

function SectionDos() {
    return (
        <>
            <div className="mb-8">
                <div className='mx-auto my-8 w-[400px]'>
                    <img className="" src={`${Recurso}`} alt="" />
                </div>
                <div className="flex justify-evenly items-center mx-auto overflow-hidden">
                    <img className="w-52 h-full shadow-[20px_0_20px_rgba(0,0,0,0.8)] " src={`${Celular}`} alt="" />
                    <img className="w-auto h-1/3" src={`${RecursoDos}`} alt="" />
                </div>
            </div>
        </>
    )
}

export default SectionDos