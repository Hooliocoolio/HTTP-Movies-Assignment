import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars, description, imageUrl  } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div>
      <h3>Description</h3>
      {description}</div>
      <img src={imageUrl} alt="image" width="250px" height="400px" />
    </div>
  );
};

export default MovieCard;
