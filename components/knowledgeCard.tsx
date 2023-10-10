import React from 'react'

interface KnowledgeCardProps {
        rute: string;
        title: string;
        description: string;
    }
function KnowledgeCard({rute, title, description}: KnowledgeCardProps) {
  return (
    <div className="text-center flex flex-col gap-1 justify-center place-items-center rounded-xl w-96 h-48 m-2 hover:scale-95 bg-[#fbbf24] ">
        <img style={{color: "black",}} src={rute} alt="Knowledge Card" className="w-[70px] h-[70px] "/>
        <div className=' w-3/4 '>
            <h1 style={{color: "black", fontWeight: 500, fontSize: 20, textAlign: 'center'}}>{title}</h1>
            <h1 style={{color: "black", textAlign: 'center'}}>{description}</h1>
        </div>
    </div>
  )
}

export default KnowledgeCard;