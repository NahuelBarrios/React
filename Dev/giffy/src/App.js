
import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from "wouter"

export default function App() {


  return (
    <div className="App">
       <section className="App-content">
        <h1>Hola</h1>
        <Link to='/gif/panda'>Gif panda</Link>
        <Link to='/gif/leon'>Gif Leon</Link>
        <Link to='/gif/cocodrilo'>Gif cocodrilo</Link>
      <Route component={ListOfGifs}
      path="/gif/:keyword" />
      </section>
    </div>
  );
}

