import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import UpdateForm from './Movies/UpdateMovie';
import axios from  'axios';
import logo from './logo.svg';
import './App.css';



function App () {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  console.log(movieList)
 
 
  const getMovieList = () => {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => { 
        setMovieList(res.data)
      })
      .catch(err => console.log(err.response))
  };

  const addToSavedList = movie =>  {
    setSavedList([...savedList, movie]);
  }

  useEffect(() => {
    getMovieList();
  }, [ ]);


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        MovieList
        </p><br />
       
      </header>
      <nav className="nav">
        <div className="home-button">
                    <Link to="/">Home</Link>
                </div>
                </nav>
      <SavedList list={savedList} />
      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>

      <Route path='/movies/:id'>
        <Movie addToSavedList={addToSavedList} /> 
      </Route>
      <Route
        path="/update-movie/:id"
        render={() => <UpdateForm movie={movieList} setMovie={setMovieList} />}
      />
    </div>
  );
}

export default App;
