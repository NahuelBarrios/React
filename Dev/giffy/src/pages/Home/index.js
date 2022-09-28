import React, {useState} from "react"
import {Link, useLocation} from "wouter"


export default function Home(){

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`search/${keyword}`);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }


    return <>
    <form onSubmit={handleSubmit}>
    <input placeholder="Search a gif here..." onChange={handleChange} type='text'
    value={keyword}/>
    </form>
    </>

}