import React from "react";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

export default function SearchResult({ params }) {
    const { keyword } = params;
    const { gifs } = useGifs({ keyword }); // No me traia pq el gifs va con {} lpm

    return <>
        {
            <ListOfGifs gifs={gifs} />
        }
    </>;
}