import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="display-1">404</h1>
            <p className="lead">Page not found</p>
            <Link to="/" className="btn btn-primary">
                Go to Home
            </Link>
        </div>
    );
}
