import NowPlaying from "../components/NowPlaying";
import {
    useLoaderData,
    Link
} from "react-router-dom"
import SearchForm from "../components/SearchForm";
import { getPopularMovies } from "../api";



export function loader(){
    return getPopularMovies()
}

export default function Home(){
    const popularMoviesData = useLoaderData()

    // https://image.tmdb.org/t/p/w500

    const movies = popularMoviesData.map(movie => {
        const path = movie.poster_path 

        return (
            <Link key={movie.id} to={`/details/${movie.id}`}>
                <div className="card">
                    <img src={path ? `https://image.tmdb.org/t/p/w500/${path}` : "src/assets/no-image.jpg"} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                            <small className="text-muted">Release: {movie.release_date}</small>
                        </p>
                    </div>
                </div>
            </Link>
        )
    })

    return (<>
        <NowPlaying />
        <SearchForm />
        <section className="container">
            <div id="popular-movies" className="grid">
                {movies}
            </div>
        </section>
    </>)
}