import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }) {
  const {push} = useHistory();
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { id } = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const deleteMovie = e => {
    // alert("are you sure you want to delete")
    e.preventDefault();
   
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        // res.data
        setMovie(res.data);
         push("/");
        // res.data ==> just the id
        // const newItems = props.items.filter(v => `${v.id}` !== res.data)
        // props.setItems(newItems)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
       
      <div className="edit-button"
        onClick={() => push(`/update-movie/${movie.id}`)}>
        Edit
      </div>
      <div className="save-button" onClick={deleteMovie}>
       Delete
      </div>
      <MovieCard movie={movie} />

    
    </div>
  );
}

export default Movie;
