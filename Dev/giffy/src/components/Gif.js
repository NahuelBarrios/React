import React from 'react'
import './Gif.css'

export default function GIF({data}){
    return (
        <a href={`#${data.id}`} className='Gif'>
            <h4>{data.title}</h4>
            <small>{data.id}</small>
            <img alt={data.title} src={data.url}/>
        </a>
    )
}