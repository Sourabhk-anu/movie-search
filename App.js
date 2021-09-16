import React, {useState} from 'react';
import Movie from './Movie';

const App = () => {

  const[title, setTitle]= useState('');
  const[movies, setMovies]= useState([]);
  const[detail, setDetail]= useState(null);

  const URL= `https://www.omdbapi.com/?apikey=1af9556a&`;

  const handleSubmit = e => {
    e.preventDefault()
    if(title!==''){
      getMovies();
    }
    else alert('please enter some title');
  }

    const getMovies = async() => {
    const response= await fetch(URL+'s='+title);
    const data = await response.json();
    setMovies(data.Search)
    }

    const getDetails = async(id) => {
      const response= await fetch(URL+'i='+id);
      const data = await response.json();
      setDetail(data)
      }
  
  return (
    <div class="container">
      <main>
      {
        detail && <div className="movieDetail">
          <img src={detail.Poster} alt="Poster"/>
        <h2>Title: {detail.Title}</h2>
        <h3><b>Year:</b> {detail.Year}</h3>
        <p><b>Ratings</b> {detail.imdbRating}</p>
        <p><b>Releasing date:</b> {detail.Released}</p>
        <p><b>Genre:</b> {detail.Genre}</p>
        <p><b>Director:</b> {detail.Director}</p>
        <p><b>Writer:</b> {detail.Writer}</p>
        <p><b>Actors:</b> {detail.Actors}</p>
        <p><b>Language:</b> {detail.Language}</p>
        <p><b>Box-Office:</b> {detail.BoxOffice}</p>
      </div>
      }
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Movie" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Search <i className="fa fa-search"></i></button>
      </form>
      <ul>
      { movies.map(movie => <Movie movie={movie} key={movie.imdbId} details={getDetails}/>) }
      </ul>
      </main>
    </div>
  )
}



export default App

