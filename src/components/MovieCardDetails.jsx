export default function MovieCardDetails({image, title, rating, release, overview, budget, revenue, status, runtime, companies, genres }){
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

  const listItems = genres.map(item => {
      return <li key={item.id}>{item.name}</li>
  })


  
  return (
    <div id="movie-details">
        <div className="details-top">
          <div>
            <img
              src={image}
              className="card-img-top"
              alt="Movie Title"
            />
          </div>
          <div>
            <h2>{title}</h2>
            <p>
              <i className="fas fa-star text-primary"></i>
              {rating} / 10
            </p>
            <p className="text-muted">Release Date: {release}</p>
            <p>
              {overview}
            </p>
            <h5>Genres</h5>
            <ul className="list-group">
              {listItems}
            </ul>
            <a href="#" target="_blank" className="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div className="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span className="text-secondary">Budget:</span> ${budget.toLocaleString("en-US")}</li>
            <li><span className="text-secondary">Revenue:</span> ${revenue.toLocaleString("en-US")}</li>
            <li><span className="text-secondary">Runtime:</span> {runtime}</li>
            <li><span className="text-secondary">Status:</span> {status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div className="list-group">{companiesList}</div>
        </div>
    </div>
    )
}