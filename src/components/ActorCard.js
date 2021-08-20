function ActorCard({ actor }) {
    return <div>
        <h3>{actor.name}</h3>
        <p>Movies:</p>
        <ul>
            {actor.movies.map(movie=><li key={movie}>{movie}</li>)}
        </ul>
    </div>
}

export default ActorCard;