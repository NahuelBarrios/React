import React from 'react';
import Gif from './Gif'

export default function ListOfGifs({gifs}){  
 return <div className='ListOfGifs'>
  {
  gifs.map(({id,title,url}) =>
  <Gif id = {id}
  key={id}
  title={title}
  url={url}
  />  
  )
  }
 </div> 
}

//(singleGif => 
        //<Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url}/> 
       // <Gif key={singleGif.id} data={singleGif}/> //Mandar los ... cada vez que quiera romper la relacion uwu asi poder modificarlo (Operador spread)
      