const apiKey = "788c6ffa";
const baseUrl = "http://www.omdbapi.com/";

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export async function fetchFromApi(endpoint: string) {
    try {
        const response = await fetch(`${baseUrl}?apikey=${apiKey}&${endpoint}`);
        console.log(response);
        const data = await response.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }
        return data;
    } catch (error) {
        console.error("Error fetching data from OMDB API:", error);
        throw error;
    }
}

export async function getMovieById(id: string) {
    return await fetchFromApi(`i=${id}`);
}

export async function getMoviesBySearch(searchTerm: string) {
    const moviesData = await fetchFromApi(`s=${searchTerm}`);
    return moviesData.Search as Movie[];
}
