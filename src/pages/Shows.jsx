import {getPopularShows} from "../api"
import {
    useLoaderData,
    Link
} from "react-router-dom"

export function loader(){
    return getPopularShows()
}

export default function Shows(){
    const tvShows = useLoaderData()

    const showsCards = tvShows.map(show => {
        const path = show.poster_path 

        return (
            <Link key={show.id} to={`/shows/${show.id}`}>
                <div className="card">
                    <img src={path ? `https://image.tmdb.org/t/p/w500/${path}` : "src/assets/no-image.jpg"} className="card-img-top" alt={show.title} />
                    <div className="card-body">
                        <h5 className="card-title">{show.title}</h5>
                        <p className="card-text">
                            <small className="text-muted">Release: {show.first_air_date}</small>
                        </p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <section>
            <h2>Popular TV Shows</h2>
            <section className="container">
                <div id="popular-shows" className="grid">
                    {showsCards}
                </div>
            </section>
        </section>
    )

}