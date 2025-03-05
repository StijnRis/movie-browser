import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utils/useMovieApi";

export default function MoviePage() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getMovieById(id as string);
                setMovie(data);
            } catch (err) {
                setError("Something went wrong!");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>Movie not found!</p>;
    }

    const { Title, Plot, Poster } = movie;
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">{Title}</h1>
                    <img src={Poster} className="img-fluid" alt={Title} />
                    <p className="mt-4">{Plot}</p>
                </div>
            </div>
        </div>
    );
}
