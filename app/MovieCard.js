export default function MovieCard({ movie }) {
  return (
   
      <div className='card' key={movie.id}>
        <img
          className='card--image'
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        ></img>
        <div className='card--content'>
          <h3 className='card--title'>{movie.title}</h3>
          <p className='card--desc'>{movie.overview}</p>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
        </div>
      </div>
    
  );
}
