import { NavLink } from "react-router";

function NotFound() {
  return (
    <main className="container py-5 text-center notfound-page">
      <i className="fa-solid fa-book-open notfound-icon mb-3"></i>
      <h1 className="display-1 fw-bold notfound-code">404</h1>
      <h2 className="fw-bold mb-3">Page Not Found</h2>
      <p className="text-secondary mb-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <NavLink to="/" className="btn btn-primary btn-lg">
        <i className="fa-solid fa-house me-2"></i>
        Back to Home
      </NavLink>
    </main>
  );
}

export default NotFound;