import { NavLink, useOutletContext } from "react-router";

function Home() {
  const { books } = useOutletContext();

  return (
    <main className="container">
      <section className="home-banner rounded-4 p-4 p-md-5 mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <p className="text-primary fw-semibold">WELCOME TO BOOKSALE</p>
            <h1 className="display-5 fw-bold">Temukan Buku Favoritmu</h1>
            <p className="lead">
              Jelajahi koleksi buku pemrograman dan teknologi untuk menambah pengetahuan.
            </p>
            <NavLink to="/book" className="btn btn-primary btn-lg">
              Lihat Semua Buku
            </NavLink>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80"
              alt="Rak buku di perpustakaan"
              className="home-image rounded-4"
            />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Koleksi Buku</h2>
          <p className="text-secondary">Berikut beberapa buku yang tersedia.</p>
        </div>
        <div className="row g-4">
          {books.map((book) => (
            <div className="col-sm-6 col-lg-4" key={book.id}>
              <article className="card h-100 shadow-sm">
                <img src={book.image} className="card-img-top book-image" alt={book.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="small text-secondary mb-2">{book.author} · {book.year}</p>
                  <p className="card-text">{book.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <NavLink to="/book" className="btn btn-outline-primary">Buka Halaman Book</NavLink>
        </div>
      </section>
    </main>
  );
}

export default Home;
