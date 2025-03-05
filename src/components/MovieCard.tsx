import { Movie } from "../utils/useMovieApi";

interface props {
    movie: Movie;
}

export default function MovieCard({ movie }: props) {
    const { Title, Plot, Poster, imdbID } = movie;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={Poster} className="card-img-top" alt={Title} />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Plot}</p>
                <a href={`${import.meta.env.BASE_URL}movie/${imdbID}`} className="btn btn-primary">
                    More info
                </a>
            </div>
        </div>
    );
}
