import React from 'react'
interface Knowledgeprops {
    image: string;
    title: string;
    text: string;
   
}
const knowledge = ({image, title, text}: Knowledgeprops ) => {
  return (
    <div>
        <img src={image} className=''/>
        
    </div>
  )
}

export default knowledge