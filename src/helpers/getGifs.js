
export const getGifs = async( category ) => {
        
    const url = `https://tenor.googleapis.com/v2/search?key=AIzaSyDSbnN7NVrp9LZ_cVVxVdXbXjGS7Id6W1U&q=${encodeURI( category )}`;
    const resp = await fetch(url);
    const {results} = await resp.json();

    const gifs = results.map( img => {
        return {
            id : img.id,
            title : img.content_description,
            url : img.media_formats.gif.url
        }
    })

    return gifs;
}