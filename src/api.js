export async function getPopularMovies(){
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=3179db4e4d442f14e797a64d4de2ab5d")
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch popular movies",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data.results
}

export async function getPopularShows(){
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=3179db4e4d442f14e797a64d4de2ab5d")
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch popular shows",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data.results
}

export async function getDetails(id){
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=3179db4e4d442f14e797a64d4de2ab5d`
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch popular movies",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

export async function getShowDetails(id){
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=3179db4e4d442f14e797a64d4de2ab5d`
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch popular movies",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

export async function getSearch({type, search, page}){
    const url = `https://api.themoviedb.org/3/search/${type}?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=3179db4e4d442f14e797a64d4de2ab5d`
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch search",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

export async function getNowPlayingMovies(){
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=3179db4e4d442f14e797a64d4de2ab5d")
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch now playing movies",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data.results

} 