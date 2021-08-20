function MovieCard({ movie }) {
    return <div>
        <h3>{movie.title}</h3>
        <p>Runtime: {movie.time}</p>
        <p>Genres:</p>
        <ul>
            {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
        </ul>
    </div>
}

export default MovieCard;