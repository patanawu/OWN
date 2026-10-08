import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <footer className="container border-top py-4 mt-5 text-center text-secondary">
        <p className="mb-0">&copy; 2026 NF Academy</p>
      </footer>
    </>
  );
}

export default Layout;