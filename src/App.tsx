import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import NoPage from "./pages/NoPage";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="movie/:id" element={<MoviePage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
