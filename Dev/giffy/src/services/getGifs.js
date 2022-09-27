const apiKey = 'Hil5ycTevm5mhM3GEXC3DewMkukJhehZ';

export default function getGifs({keyword = 'morti'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

 return fetch(apiURL) // nos permite acceder a recursos de un servidor de manera asíncrona
.then(res => res.json())
.then(response => {
  const {data = []} = response; //extraigo data de response.
  if(Array.isArray(data)){
    const gifs = data.map(image => {
        const {images, title, id} = image;
        const {url} = images.downsized_medium;
        return {title,id,url};
    })
    return gifs;
  }
})
}