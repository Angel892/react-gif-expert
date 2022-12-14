export const getGifst = async (category) => {
    const key = 'tKkfuexSKm3zBzzY4S2Ey4ccxV7nKGgL'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}