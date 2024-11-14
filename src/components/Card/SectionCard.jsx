import Card from "../Card/Card";

function SectionCard() {
    return (
        <>
        <div className = 'w-full bg-white py-10'>
            <div className="container mx-auto px-4">
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {/*Codigo principal*/}

                    <Card></Card>

                </div>
            </div>
        </div >
        </>
    )
}

export default SectionCard