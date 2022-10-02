import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs';

export function useGifs({ keyword } = { keyword: null }) {
    const [gifs, setGifs] = useState([]);

    useEffect(function () {

        //recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword');

        getGifs({ keyword: keywordToUse }).then(gifs => setGifs(gifs));
        localStorage.setItem('lastKeyword', keywordToUse);
    }, [keyword])
    return { gifs };
}
