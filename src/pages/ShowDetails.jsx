import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getShowDetails } from "../api"
import ShowCardDetails from "../components/ShowCardDetails"

export function loader({params}){
    return getShowDetails(params.id)
}

export default function Details(){
    const location = useLocation()
    const show = useLoaderData()

    const search = location.state?.search || ""
    console.log(search)

    return (
        <section className="container">
            
            <div className="back">
            <Link className="btn" to={search ? `/search${search}` : "/shows"}>
                {search ? "Back to search" : "Back to popular shows"}
            </Link>
            </div>

            <ShowCardDetails 
              image={`https://image.tmdb.org/t/p/w500/${show.poster_path}` || "src/assets/no-image.jpg"} 
              title={show.name} 
              rating={Math.ceil(show.vote_average)} 
              release={show.first_air_date} 
              overview={show.overview} 
              status={show.status} 
              companies={show.production_companies} 
              genres={show.genres} 
              numberEpisodes={show.number_of_episodes}
              lastAiredEpisode={show.last_episode_to_air.name}
            />
        </section>
    )
}