
import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';

const GIFS = [
  "https://media.giphy.com/media/rDMGBIqjAJIys/giphy.gif",
  "https://media.giphy.com/media/BdMRkwomqVsLm/giphy.gif"
]

const DIFERENT_GIFS = [
  "https://media.giphy.com/media/N6funLtVsHW0g/giphy.gif"
]
function App() {

  const [gifs, setGifs] = useState(GIFS);

  useEffect(function (){
    console.log("Actualizadno Los Gift");
    setGifs(DIFERENT_GIFS);
  },[])

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => <img src ={singleGif}/>)
      
      }
      </section>
    </div>
  );
}

export default App;
