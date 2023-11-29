'use client';

import { useState } from 'react';
import 'styles.css';
import 'app/globals.css';
import MovieCard from './MovieCard';

const SearchMoviesClient = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('Submit:', query);

    const apiKey = '8c010cdcc58ba76c328c3ff44639de27';
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Update state with the fetched movies
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={searchMovies}>
        <label
          htmlFor='query'
          className='label block text-sm font-medium leading-6 text-gray-900'
        >
          Movie Name :
        </label>
        <div className='mt-2 rounded-md shadow-sm mr-1.5'>
          <input
            type='text'
            name='query'
            id='movie'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='rounded-md w-full md w-8/12 py-1.5 pl-7 pr-20 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg sm:text-xl sm:leading-7'
            placeholder='i.e. Jurassic Park'
          />
          <button
            className='button rounded-full font-bold text-gray-900 block w-full'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>

      {/* Display the fetched movies */}
      <div className='card-list'>
      {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
       
            </div>
        
      </div>
  
  );
};

export default SearchMoviesClient;
