import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="moive_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres_gener">
                {genre}
              </li>
            ))}
          </ul>
          <h5 className="movie_summary">{summary.slice(0, 130)}...</h5>
        </div>
      </div>
    </Link>
  );
}

movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default movie;
