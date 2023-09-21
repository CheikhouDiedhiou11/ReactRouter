import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Movies from './Movies';
const Home = () => {
     const ajouterNouveauFilm = (event) => {
      event.preventDefault(); 
      ajouterFilm(nouveauFilm); 
      setNouveauFilm({ 
        title: 'DETONATOR',
        description: '',
        posterURL: 'https://www.cinetrafic.fr/images/affiches/original/aff_7565020191115181121.jpg',
        rating: 3.0,
      });
    };
  
    
const [nouveauFilm, setNouveauFilm] = useState({
      title: 'GAME OVER MAN',
      description: '',
      posterURL: 'https://www.cinetrafic.fr/images/affiches/original/aff_5159020190218170006.jpg',
      rating:4.0,
      
    });
    const ajouterFilm = (nouveauFilm) => {
      setMovies([...movies, nouveauFilm]);
      setFilteredMovies([...movies, nouveauFilm]); 
  
    };
     const [movies, setMovies] = useState(Movies);
  
    const [filteredMovies, setFilteredMovies] = useState(movies);
  
    const handleFilter = (filters) => {
      const filtered = movies.filter((movie) => {
        const titleMatch = movie.title.includes(filters.title);
        const ratingMatch =
          movie.rating >= parseFloat(filters.rating) || filters.rating === '';
        return titleMatch && ratingMatch;
      });
      setFilteredMovies(filtered);
    };
  
    return (
      <div className="App">
    <form onSubmit={ajouterNouveauFilm}>
    <input
      type="text"
      placeholder="titre"
      value={nouveauFilm.title}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, title: e.target.value })}
    />
    <input
      type="text"
      placeholder="Description"
      value={nouveauFilm.description}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, description: e.target.value })}
    />
    <input
      type="text"
      placeholder="Poster URL"
      value={nouveauFilm.posterURL}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, posterURL: e.target.value })}
    />
    <input
      type="number"
      placeholder="Rating"
      value={nouveauFilm.rating}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, rating: e.target.value })}
    />
         <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
          Ajouter
        </button>
  </form>
  
        <h1>Movie Collection</h1>
        <Filter onFilter={handleFilter} />
        <MovieList movies={filteredMovies} />
      </div>
   );
   
}

export default Home

