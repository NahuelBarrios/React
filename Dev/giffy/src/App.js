
import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif'

export default function App() {

  const [gifs, setGifs] = useState([]);

  useEffect(function (){
    getGifs({keyword : 'programming'}).then(gifs => setGifs(gifs));
  },[])

  return (
    <div className="App">
       <section className="App-content">
      {
        gifs.map(singleGif => 
        <Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url}/>
        )
      }
      </section>
    </div>
  );
}

