function DirectorCard({ director }) {
    return <div>
        <h3>{director.name}</h3>
        <p>Movies:</p>
        <ul>
            {director.movies.map(movie=><li key={movie}>{movie}</li>)}
        </ul>
    </div>
}

export default DirectorCard;