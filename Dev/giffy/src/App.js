
import React from 'react';
import './App.css';
import { Link, Route } from "wouter"
import Home from './pages/Home/index'
import SearchResult from './SearchResults';

export default function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>Hola</h1>
        <Route component={Home} path="/" />
        <Link to='/'>Volver al menu</Link>
        <Route component={SearchResult}
          path="/search/:keyword" />
      </section>
    </div>
  );
}

