import React, {useEffect,useState} from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs'


export default function ListOfGifs({params}){  
  const {keyword} = params;
  const [gifs, setGifs] = useState([]);

  useEffect(function (){
    getGifs({keyword}).then(gifs => setGifs(gifs));
  },[keyword])

 return <div>
  {
  gifs.map(singleGif => 
        //<Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url}/> 
        <Gif key={singleGif.id} data={singleGif}/> //Mandar los ... cada vez que quiera romper la relacion uwu asi poder modificarlo (Operador spread)
      )
  }
 </div> 
}