import React from "react";
import { Movie } from "../utils/useMovieApi";
import MovieCard from "./MovieCard";


interface Props {
    movies: Movie[]
}

export default function MovieList(props: Props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.movies.map((movie) => (
                <div className="col" key={movie.imdbID}>
                    <MovieCard
                        movie={movie}
                        key={movie.imdbID}
                    />
                </div>
            ))}
        </div>
    );
}