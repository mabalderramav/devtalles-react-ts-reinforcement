import type {GiphyRandomResponse} from "../data/giphy.response.ts";

const API_KEY = 'SW3F9yAv0UXgx5UTa53pkfxXsYcCNFGM';


const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}

try {
    const response = await myRequest;
    const {data}: GiphyRandomResponse = await response.json();
    const imageUrl: string = data.images.original.url;
    console.log(data);
    console.log(imageUrl);
    createImageInsideDOM(imageUrl);
} catch (error) {
    console.error('Error fetching data:', error);
}
