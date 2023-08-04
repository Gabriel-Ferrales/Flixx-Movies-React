import { useLoaderData, Link, useLocation } from "react-router-dom"
import { getDetails } from "../api"
import MovieCardDetails from "../components/MovieCardDetails"

export function loader({params}){
    return getDetails(params.id)
}

export default function Details(){
    const movie = useLoaderData()
    const location = useLocation()
    const search = location.state?.search || ""

    return (
        <section className="container">

        <div className="back">
        <Link className="btn" to={search ? `/search${search}` : "/"}>
            {search ? "Back to search" : "Back to popular movies"}
        </Link>
        </div>

        <MovieCardDetails 
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` || "src/assets/no-image.jpg"} 
            title={movie.title}
            rating={Math.ceil(movie.vote_average)}
            release={movie.release_date}
            overview={movie.overview}
            budget={movie.budget}
            revenue={movie.revenue}
            status={movie.status}
            runtime={movie.runtime}
            companies={movie.production_companies}
            genres={movie.genres}
        />
        </section>
    )
}