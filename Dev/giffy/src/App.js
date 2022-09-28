
import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from "wouter"
import Home from './pages/Home/index'

export default function App() {


  return (
    <div className="App">
       <section className="App-content">
        <h1>Hola</h1>
        <Route component={Home} path="/"/>
        <Link to='/'>Volver al menu</Link>
      <Route component={ListOfGifs}
      path="/search/:keyword" />
      </section>
    </div>
  );
}

