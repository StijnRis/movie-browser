import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import NoPage from "./pages/NoPage";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
