import React, {useContext}from 'react'
import { AppContext } from '../Contexts/AppContext'



const Card = ({post})=>{
    const{removeCard}=useContext(AppContext); 
  return (
    <div className='card'>
        <button onClick={() =>removeCard(post.id)}>❌</button>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p> Mon, 21Dec 2020 14:57 GMT</p>
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png" alt="Image Not Found"></img>
      </div>
  )
}
export default Card;
