export default function ShowCardDetails({
    image, 
    title, 
    rating, 
    release, 
    overview, 
    status, 
    companies, 
    genres, 
    numberEpisodes,
    lastAiredEpisode }){


        let companiesList = ""

        if (companies.length > 0) {
            for (let i = 0; i < companies.length; i++){
            if (i === companies.length - 1) {
                companiesList += companies[i].name
            }
            else {
                companiesList += `${companies[i].name}, `
            }
            } 
        }

        const genresListItems = genres.map(item => {
            return <li key={item.id}>{item.name}</li>
        })
    

        return (
            <>
            <div id="show-details">
                <div className="details-top">
                    <div>
                    <img src={image} className="card-img-top" alt="Show Name" />
                    </div>
                    <div>
                    <h2>{title}</h2>
                    <p>
                        <i className="fas fa-star text-primary" />{rating} / 10
                    </p>
                    <p className="text-muted">Release Date: {release}</p>
                    <p>
                        {overview}
                    </p>
                    <h5>Genres</h5>
                    <ul className="list-group">
                        {genresListItems}
                    </ul>
                    <a href="#" target="_blank" className="btn">
                        Visit Show Homepage
                    </a>
                    </div>
                </div>
                <div className="details-bottom">
                    <h2>Show Info</h2>
                    <ul>
                    <li>
                        <span className="text-secondary">Number Of Episodes:</span> {numberEpisodes}
                    </li>
                    <li>
                        <span className="text-secondary">Last Episode To Air:</span> {lastAiredEpisode}
                    </li>
                    <li>
                        <span className="text-secondary">Status:</span> {status}
                    </li>
                    </ul>
                    <h4>Production Companies</h4>
                    <div className="list-group">{companiesList}</div>
                </div>
            </div>
            </>
        )
}