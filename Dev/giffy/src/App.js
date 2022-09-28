
import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

export default function App() {


  return (
    <div className="App">
       <section className="App-content">
      <ListOfGifs keyword='Argentina'/>
      </section>
    </div>
  );
}

