import React from 'react'
import './Gif.css'

export default function GIF({ id, title, url }) {
    return (
        <a href={`#${id}`} className='Gif'>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url} />
        </a>
    )
}