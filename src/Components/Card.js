import React, {useContext}from 'react'
import { AppContext } from '../Contexts/AppContext'



const Card = ({post})=>{
    const{removeCard}=useContext(AppContext); 
  return (
    <div className='col-span-1 rounded-lg p-3 bg-white text-left flex flex-col justify-between overflow-hidden shadow-lg shadow-gray-500 gap-3'>
        <button className='bg-white ml-auto' onClick={() =>removeCard(post.id)}>❌</button>
        <h3 className='line-clamp-2 text-black font-semibold text-xl'>{post.title}</h3>
        <p className='line-clamp-2 text-gray-800 '>{post.body}</p>
        <p className='line-clamp-2 text-gray-600 font-semibold '> Mon, 21Dec 2020 14:57 GMT</p>
      <img className='w-full h-[120px] overflow-hidden rounded-lg' src="https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png" alt="Image Not Found"></img>
      </div>
  )
}
export default Card;
