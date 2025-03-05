import { useState } from "react";
import MovieList from "../components/MovieList";
import { getMoviesBySearch, Movie } from "../utils/useMovieApi";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        setError(null);
        setMovies([]);

        try {
            const data = await getMoviesBySearch(query);
            console.log(data);
            setMovies(data);
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">Search Movies</h1>
                    <div className="form-group" id="searchQuery">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter movie title"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mt-3 w-100"
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {movies && (
                    <div className="row mt-5">
                        <div className="col">
                            <MovieList movies={movies} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
