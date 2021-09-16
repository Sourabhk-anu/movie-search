import React from 'react'

const Movie = ({movie, details}) => {
    const {imdbID, Title, Poster, Year} = movie;
    return(
        <div className="movie">
            <h2>Movie Name: {Title}</h2>
            <img className="image" onClick={() => details(imdbID)} src={Poster} alt={Title}/>
            <h3>Year: {Year}</h3>
        </div>
    )
}

export default Movie
