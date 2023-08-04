import { useLoaderData, Link, useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import { getSearch } from "../api"

export function loader({request}){
    const url = new URL(request.url)
    const type = url.searchParams.get("type")
    const search = url.searchParams.get("search-term")
    const page = url.searchParams.get("page") || 1
    return getSearch({type, search, page})
}

export default function Search(){
    const searchData = useLoaderData()
    const totalResults = searchData.total_results
    const totalPages = searchData.total_pages
    
    let [searchParams, setSearchParams] = useSearchParams()
    const type = searchParams.get("type")
    const searchTerm = searchParams.get("search-term")
    console.log(searcdasdh)
    
    
    const currentPage = searchData.page

    const currentResults = currentPage === totalPages ? totalResults: 
                                            searchData.results.length * currentPage
    
    // https://image.tmdb.org/t/p/w500

    const movies = searchData.results.map(movie => {
        const path = movie.poster_path 

        return (
            <Link key={movie.id} to={type === "movie" ? `/details/${movie.id}` : `/shows/${movie.id}`} state={{search : `?${searchParams.toString()}`}}>
                <div className="card">
                    <img src={path ? `https://image.tmdb.org/t/p/w500/${path}` : "src/assets/no-image.jpg"} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                            <small className="text-muted">Release: {type === "movie" ? movie.release_date : movie.first_air_date}</small>
                        </p>
                    </div>
                </div>
            </Link>
        )
    })


    return (
        <>
            <SearchForm />
            <section id="search-results-wrapper" className="container">
                <h2>{currentResults} of {totalResults} results for {searchTerm}</h2>
                <div id="search-results" className="grid">
                    {movies}
                </div>
                <div id="pagination">
                    <div className="pagination">
                        {currentPage === 1 ? <button className="btn btn-primary" id="prev" disabled={true}>Prev</button> :
                            <Link to={`/search?type=${type}&search-term=${searchTerm}&page=${currentPage - 1}`}>
                                <button className="btn btn-primary" id="next">Prev</button>
                            </Link>
                        }
                        

                        {currentPage === totalPages ? <button className="btn btn-primary" id="next" disabled={true}>Next</button> :
                        <Link to={`/search?type=${type}&search-term=${searchTerm}&page=${currentPage + 1}`}>
                            <button className="btn btn-primary" id="next">Next</button>
                        </Link>}

                        <div className="page-counter">Page {currentPage} of {totalPages}</div>
                    </div>
                </div>
            </section>
        </>
    )
}