import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={`/`}>Movie Browser</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/search`}>Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container text-center">
                    <p>&copy; 2025 Movie Browser</p>
                    <p>Information courtesy of <a href="https://www.imdb.com" target="_blank" rel="noopener noreferrer">IMDb</a>.</p>
                </div>
            </footer>
        </div>
    );
}
