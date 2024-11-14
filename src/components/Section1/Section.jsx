import "../Section1/Section.css";

function Section1() {
    return (
        <>
            <div className="fondo_arriba flex flex-col items-center justify-end">
                <div>
                    <img className="w-56" src={"https://uagroapp.uagro.mx/imgs/welcome/logo-app.png"} alt="" />
                </div>
                <div className="flex justify-center mb-4 space-x-4">
                    <a href="https://play.google.com/store/apps/details?id=com.astralz.uagroapp">
                        <img className="w-56 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" src="https://uagroapp.uagro.mx/imgs/welcome/app-google.png" alt="" />
                    </a>
                    <a href="https://apps.apple.com/us/app/uagro-app/id6475783654">
                        <img className="w-56 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" src="https://uagroapp.uagro.mx/imgs/welcome/app-store.png" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Section1