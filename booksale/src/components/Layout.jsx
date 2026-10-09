import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout({ books, setBooks }) {
  return (
    <>
      <Navbar />
      <Outlet context={{ books, setBooks }} />
      <footer className="container border-top py-4 mt-5 text-center text-secondary">
        <p className="mb-0">&copy; 2026 NF Academy</p>
      </footer>
    </>
  );
}

export default Layout;
