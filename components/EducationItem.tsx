import React from 'react'

interface EducationItemProps {
        almaMatter: string;
        fechas: string;
        grado: string;
        descripcion: string;
        estado: string;
    }
function EducationItem({ almaMatter, fechas, grado, descripcion, estado}: EducationItemProps) {
  return (
    <div className="bg-[#fbbf24] pt-5 px-10 w-90 rounded-xl m-2 hover:scale-95 max-w-[80%] mx-auto  ">
        <div className="grid grid-cols-2 grid-flow-row gap-4">
            <h1 style={{fontWeight: 'bold', fontSize: 20 }}>{almaMatter}</h1>
            <div className="flex flex-between place-items-center gap-4 " >
              <h1 className='rounded-xl' style={{ color: 'black', backgroundColor: '#ffffff', fontWeight: 'bold', fontSize: '16px' }}>Estudiante</h1>
              <h1 className="px-4 text- rounded-xl " style={{ color: 'white', backgroundColor: '#000000', fontWeight: 'bold', fontSize: '16px' }}>{fechas}</h1>

            </div>
        </div>
        <div className='flex flex-col w-4/5 gap-5'>
            <h1 style={{fontWeight: 500, fontSize: 20}}>{grado}</h1>
            <h1 style={{ color: "black",  }}>{descripcion}</h1>

            <h1 className='rounded-xl 'style={{color: "#000000" , fontWeight: 'bold', fontSize: '15px'}}>{estado}</h1>
        </div>
    </div>
  )
}

export {EducationItem}