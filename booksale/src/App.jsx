
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="container">
      {/* Navbar */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <button
            onClick={() => setPage("Home")}
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none border-0 bg-transparent"
          >
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4 fw-bold">bookstore</span>
          </button>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <button
              className="nav-link px-2 link-secondary"
              onClick={() => setPage("Home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="nav-link px-2 link-secondary"
              onClick={() => setPage("Home")}
            >
              <i className="fa-solid fa-book me-1"></i>Books
            </button>
          </li>
          <li>
            <button
              className="nav-link px-2 link-secondary"
              onClick={() => setPage("Home")}
            >
              <i className="fa-solid fa-layer-group me-1"></i>Categories
            </button>
          </li>
          <li>
            <button
              className="nav-link px-2 link-secondary"
              onClick={() => setPage("Team")}
            >
              Team
            </button>
          </li>
          <li>
            <button
              className="nav-link px-2 link-secondary"
              onClick={() => setPage("Contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setPage("Contact")}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setPage("Contact")}
          >
            Sign-up
          </button>
        </div>
      </header>

      {/* HOME */}
      {page === "Home" && (
        <>
          <section className="p-4 p-md-5 mb-4 rounded-3 home-banner">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="display-5 fw-bold">
                  Discover Your Next Favorite Book
                </h1>
                <p className="fs-5 text-secondary">
                  Temukan buku favoritmu dan jelajahi dunia baru melalui
                  cerita, pengetahuan, dan inspirasi dari berbagai bacaan.
                </p>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() =>
                    document.getElementById("books").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Explore Books
                </button>
              </div>

              <div className="col-md-5 text-center mt-4 mt-md-0">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700"
                  alt="Koleksi buku di perpustakaan"
                  className="img-fluid rounded-3 home-image"
                />
              </div>
            </div>
          </section>

          <section id="books" className="my-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Featured Books</h2>
              <p className="text-secondary">
                Pilihan buku menarik untuk menemani waktu membacamu.
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  title: "Atomic Habits",
                  author: "James Clear",
                  image:
                    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
                },
                {
                  title: "The Psychology of Money",
                  author: "Morgan Housel",
                  image:
                    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
                },
                {
                  title: "The Great Gatsby",
                  author: "F. Scott Fitzgerald",
                  image:
                    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
                },
              ].map((book) => (
                <div className="col-md-4" key={book.title}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={book.image}
                      className="card-img-top book-image"
                      alt={book.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{book.title}</h5>
                      <p className="card-text text-secondary">
                        By {book.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* TEAM */}
      {page === "Team" && (
        <section className="my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Meet Our Team</h1>
            <p className="text-secondary">
              Tim yang bekerja untuk memberikan pengalaman membaca terbaik.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Alexandra Putri",
                role: "Founder",
                icon: "fa-user-tie",
              },
              {
                name: "Rizky Pratama",
                role: "Book Curator",
                icon: "fa-book-open",
              },
              {
                name: "Nadia Safitri",
                role: "Customer Support",
                icon: "fa-headset",
              },
            ].map((member) => (
              <div className="col-md-4" key={member.name}>
                <div className="card h-100 shadow-sm text-center p-4">
                  <i
                    className={`fa-solid ${member.icon} team-icon mb-3`}
                  ></i>
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-secondary mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === "Contact" && (
        <section className="my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="text-secondary">
              Hubungi kami jika kamu memiliki pertanyaan atau saran.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-5">
              <div className="p-4 bg-light rounded-3 h-100">
                <h4 className="fw-bold mb-4">Contact Information</h4>
                <p>
                  <i className="fa-solid fa-envelope text-primary me-2"></i>
                  hello@bookstore.com
                </p>
                <p>
                  <i className="fa-solid fa-phone text-primary me-2"></i>
                  +62 812-3456-7890
                </p>
                <p>
                  <i className="fa-solid fa-location-dot text-primary me-2"></i>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <form
                className="border rounded-3 p-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Terima kasih sudah mengirim pesan!");
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama lengkap"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tulis pesan kamu..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-top py-4 mt-5 text-center text-secondary">
        <i className="fa-solid fa-book me-2 text-primary"></i>
        Bookstore © 2026
      </footer>
    </div>
  );
}

export default App;