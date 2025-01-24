import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="project-item-container">
      <img className="project-item-image" alt={title} src={posterPath} />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="text-center mb-3">
        <button className="btn btn-outline-success" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
